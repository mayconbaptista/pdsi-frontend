import React from "react";
import {
    DocumentTextIcon,
    StarIcon,
    ArrowLongLeftIcon   
} from "@heroicons/react/24/outline";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { signOut } from "next-auth/react";

const useRoutes = () => {

    const pathname = usePathname();

    const routes = useMemo( () => [
        {
            label: 'Chat A',
            href: '/users/chat/a',
            icon: <DocumentTextIcon className="w-6 h-6" />,
            active: pathname == '/users/chat/a'
        },
        {
            label: 'Chat B',
            href: '/users/chat/b',
            icon: <DocumentTextIcon className="w-6 h-6" />,
            active: pathname == '/users/chat/b'
        },
        {
          label: "Favoritos",
          href: "/users/favorites",
          icon: <StarIcon className="w-6 h-6" />,
          active: pathname == '/users/favorites'
        },
        {
            label: "Logout",
            href: "#",
            icon: <ArrowLongLeftIcon className="w-6 h-6" />,
            onClick: () => signOut(),
          },
    ],[pathname]);

    return routes;
}

export default useRoutes;