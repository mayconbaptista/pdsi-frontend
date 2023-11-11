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
    const username = "test"

    try {
        const response = await api.get(`v1/question/${username}/latest`);

        console.log(response);

    } catch (err) {
        console.log("error in get chats")
    } finally {
        return ['a','b','c','d','e','f','g','h'];
    }
}

export const useChats = () => {

    const pathname = usePathname();

    const [letters,setLetters] = useState([]);
    const [chats,setChats] = useState([]);

    useEffect(()=>{
        const getChats = async() => {
            const chats = await getRecentsChats()
            setLetters(chats);
        }
        getChats();
    },[]);

    useEffect( () => {
        let aux = []
        aux = letters.map(letter => (
            Chat(`Conselho ${letter.toUpperCase()}`,letter,pathname)
        ));
        setChats(aux);
    } ,[letters,pathname])

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
