import React, { useState } from "react";
import {
    ChatBubbleLeftIcon,
    StarIcon,
    ArrowLeftOnRectangleIcon
} from "@heroicons/react/24/outline";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { signOut } from "next-auth/react";

function Chat (name,id,pathname){  

    const isChatActive = pathname == `/users/chat/${id}`;
    return {
        label: name,
        href: `/users/chat/${id}`,
        icon: <ChatBubbleLeftIcon className="w-6 h-6" />,
        active: isChatActive
    };
};

export const useChats = () => {
    const pathname = usePathname();
    var letters = ['a','b','c','d','e','f','g','h'];

    var chats = []
        chats = letters.map(letter => (
            Chat(`Conselho ${letter.toUpperCase()}`,letter,pathname)
        )
    );

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
