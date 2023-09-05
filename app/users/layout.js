'use client';
import { useState,useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import Navbar from "../components/layout/navbar/Navbar";
import Sidebar from "../components/layout/sidebar/Sidebar";


export default function UsersLayout({children}) {

    const [showSidebar,setShowSidebar] = useState(false);

    const refSidebar = useRef(null);

    useOnClickOutside(refSidebar, (e) => {
        setShowSidebar(false);
    });

    return(       
        <div className="grid min-h-screen grid-rows-header bg-zinc-100">
            <div className="bg-white shadow-sm z-10">
                <Navbar onMenuButtonClick={() => setShowSidebar(!showSidebar)}/>
            </div>
            <div className="grid md:grid-cols-sidebar">
                <Sidebar isOpen={showSidebar} reference={refSidebar}/>
                {children}
            </div>
        </div>
    );
};