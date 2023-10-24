import classNames from "classnames";
import SidebarItem from "./SidebarItem";
import {useRoutes,useChats} from "./sidebarItens";

import { LogoWide} from "@/public/image/LogoWide";

const Sidebar = ({isOpen,reference,closeSidebar}) => {
    
    const routes = useRoutes();
    const chats = useChats();

    return (
        <div
        className={classNames({
            "flex flex-col justify-between": true, // layout
            "bg-indigo-700 text-zinc-50": true, // colors
            "md:w-full md:sticky md:top-2 md:z-0 top-0 z-20 fixed": true, // positioning
            "md:h-screen h-full w-[300px]": true, // for height and width
            "transition-transform .3s ease-in-out md:translate-x-0": true, //animations
            "-translate-x-full ": !isOpen, //hide sidebar to the left when closed
        })}
        ref={reference}
        >
            <nav className="h-full md:sticky top-0 md:top-2 ">
                <div className="py-2 border-b border-pink-100">
                    <LogoWide
                        height={80}
                    />
                </div>
                {/* nav items */}
                <div className="py-1">
                    Conversas
                </div>
                <div className="py-2 flex flex-col gap-2 h-[300px] overflow-y-auto border-b border-pink-100">
                    {chats.map( (item,index) => { return (
                        <SidebarItem
                            key={index}
                            index={index}
                            item={item}
                            onClick={closeSidebar}
                        />
                    );})}
                </div>
                <div className="my-4 py-2 flex flex-col gap-2 border-b border-pink-100">
                    {routes.map( (item,index) => { return (
                        <SidebarItem
                            key={index}
                            index={index}
                            item={item}
                            onClick={closeSidebar}
                        />
                    );})}
                </div>
                <div className="">
                    Footer
                </div>
            </nav>
        </div>
    );
};
export default Sidebar;
