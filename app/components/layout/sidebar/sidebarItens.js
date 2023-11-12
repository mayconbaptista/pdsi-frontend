import React, { useEffect, useState } from "react";
import {
    ChatBubbleLeftIcon,
    StarIcon,
    ArrowLeftOnRectangleIcon
} from "@heroicons/react/24/outline";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { signOut } from "next-auth/react";
import api from "@/app/api/api";

function Chat (name,id,pathname){  

    const isChatActive = pathname == `/users/chat/${id}`;
    return {
        label: name,
        href: `/users/chat/${id}`,
        icon: <ChatBubbleLeftIcon className="w-6 h-6" />,
        active: isChatActive,
        title: `Meu conselho de nome ${id}`,
    };
};

const getRecentsChats = async () => {
    const username = "test2"

    try {
        // Renovar token admin
        const responseToken = await api.post('/v1/sso/token',{      
            username: 'admin',
            password: 'admin'   
        });
        
        const response = await api.get(`v1/question/${username}/latest`,{
            headers:{
                Authorization: "Bearer "+ responseToken.data.accessToken
            }   
        });

        return response.data;

    } catch (err) {
        console.log("error in get chats")
        return [];
    }
}

export const getChats = async (pathname) => {
    const questions = await getRecentsChats()
    let aux = []
    aux = questions.map( question => (
        Chat(`${question.question.substring(0,20)}`,question.questionId,pathname)
    ));
    return aux;
}

export const useChats = () => {

    const pathname = usePathname();

    const [questions,setQuestions] = useState([]);
    const [chats,setChats] = useState([]);

    useEffect(()=>{
        const getChats = async() => {
            const questions = await getRecentsChats()
            setQuestions(questions);
        }
        getChats();
    },[pathname]);

    useEffect( () => {
        let aux = []
        aux = questions.map( question => (
            Chat(`${question.question.substring(0,20)}`,question.questionId,pathname)
        ));
        setChats(aux);
    } ,[questions,pathname])

    return chats;
};

export const useRoutes = () => {

    const pathname = usePathname();

    const routes = useMemo( () => [
        {
            label: "Favoritos",
            href: "/users/favorites",
            icon: <StarIcon className="w-6 h-6" />,
            active: pathname == '/users/favorites',
        },
        {
            label: "Logout",
            href: "/",
            icon: <ArrowLeftOnRectangleIcon className="w-6 h-6" />,
            onClick: () => signOut(),
        },
    ],[pathname]);

    return routes;
};
