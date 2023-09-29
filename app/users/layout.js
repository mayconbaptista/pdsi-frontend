'use client';
import { useState,useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { HamburguerIcon } from "../components/buttons/hamburguer/hamburguerBtn";
import { Bars3Icon } from "@heroicons/react/24/outline";

import {XMarkIcon} from "@heroicons/react/24/outline"
import Navbar from "../components/layout/navbar/Navbar";
import Sidebar from "../components/layout/sidebar/Sidebar";

export default function UsersLayout({children}) {

    const [showSidebar,setShowSidebar] = useState(false);

    const refSidebar = useRef(null);

    useOnClickOutside(refSidebar, (e) => {
        setShowSidebar(false);
    });

    return(       
        <div className="grid grid-cols-2 md:grid-cols-3 bg-zinc-100">
            <Sidebar isOpen={showSidebar} reference={refSidebar} closeSidebar={() => setShowSidebar(false)}/>
            <div className="col-span-2">
                {!showSidebar && (
                    <button className={"fixed h-8 w-8 left-0 z-50 md:hidden"} onClick={() => setShowSidebar(true)}>
                        <Bars3Icon/>
                    </button>
                )}
                {/* <Navbar onMenuButtonClick={() => setShowSidebar(!showSidebar)}/> */}
                {children}
            </div>
        </div>
    );
};