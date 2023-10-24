import React from "react";
import {
    ChatBubbleLeftIcon,
    StarIcon,
    ArrowLeftOnRectangleIcon
} from "@heroicons/react/24/outline";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { signOut } from "next-auth/react";

function getChat(pathname) {
    var letters = ['a','b','c','d','e','f','g','h'];

    var chats = []

    chats = letters.map(letter => 
        ({
            label: `Chat ${letter.toUpperCase()}`,
            href: `/users/chat/${letter}`,
            icon: <ChatBubbleLeftIcon className="w-6 h-6" />,
            active: pathname == `/users/chat/${letter}`
        })
    );

    return chats;
}

export const useChats = () => {
    const pathname = usePathname();

    const chats = useMemo( () => 
        getChat(pathname)
    ,[pathname]);
    
    return chats;
};

export const useRoutes = () => {

    const pathname = usePathname();

    const routes = useMemo( () => [
        {
          label: "Favoritos",
          href: "/users/favorites",
          icon: <StarIcon className="w-6 h-6" />,
          active: pathname == '/users/favorites'
        },
        {
            label: "Logout",
            href: "#",
            icon: <ArrowLeftOnRectangleIcon className="w-6 h-6" />,
            onClick: () => signOut(),
        },
    ],[pathname]);

    return routes;
};
