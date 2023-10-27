import classNames from "classnames";
import SidebarItem from "./SidebarItem";
import {useRoutes,useChats} from "./sidebarItens";

import { LogoWide} from "@/public/image/LogoWide";

const Sidebar = ({isOpen,reference,closeSidebar}) => {
    
    const routes = useRoutes();
    const chats = useChats();

    const UserData = {
        name: "Apenas um usuario qualquer",
        plusData: "23/10/2023",
        nameSymbol: "AU",
        plus: true,
    }

    return (
        <div
        className={classNames({
            "flex flex-col justify-between": true, // layout
            "bg-white/[0.75] text-text": true, // colors
            "backdrop-filter backdrop-saturate-150 backdrop-blur-lg":true, // glass effect
            "md:w-full md:sticky md:top-2 md:z-0 top-0 z-20 fixed": true, // positioning
            "md:h-screen h-full w-[300px] rounded-r-lg": true, // for height and width
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
                <div className="py-1 text-sm mx-2 mt-2 text-text">
                    Conversas
                </div>
                <div className="py-2 flex flex-col gap-2 h-[300px] overflow-y-auto border-b border-pink-100 overscroll-contain scroll-custom">
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
                <div className="relative flex flex-col justify-around">
                    {!UserData.plus && (<button className="
                        absolute -top-2
                        px-2 py-1
                        w-11/12 mx-3
                        text-white
                        rounded 
                        bg-invalid
                    "> 
                        Seja vip
                    </button>)}
                    <div className="relative mt-2 flex flex-row justify-evenly mt-8">
                        <div className={classNames({
                            "h-12 w-max rounded-lg text-center p-3": true,
                            "bg-success": UserData.plus,
                            "bg-invalid": !UserData.plus,
                        })}>
                            <p className="
                                font-extrabold text-xl
                                text-white
                            ">
                                {UserData.nameSymbol}
                            </p>
                        </div>
                        <div className="">
                            <p className="w-[200px] truncate">
                                {UserData.name}
                            </p>
                            {UserData.plus ? (
                                <div className="
                                bg-success rounded-lg text-white text-sm
                                text-center
                                ">
                                    VIP desde {UserData.plusData}
                                </div>
                            ): (
                                <div className="
                                    bg-invalid rounded-lg text-white text-sm
                                    text-center
                                ">
                                    Plano grátis
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Sidebar;
