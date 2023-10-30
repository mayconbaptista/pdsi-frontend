'use client';

import classNames from "classnames";

export default function ChatsLayout({params,children}) {
    return(       
        <div
            className="h-screen flex flex-col w-full"
        >
            <div className={classNames({
                "text-center": true,
                "bg-primary text-white font-extrabold text-lg tracking-wide": true, // colors
                "h-14": true,
                "t-0":true,
                "w-full sticky py-4 shadow-sm": true,
             })}>
                <h1>Layout {params.chatId}</h1>
            </div>
            <div className="h-full overflow-y-scroll relative">
                {children}
            </div>
        </div>
    );
};