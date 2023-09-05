'use client';

import classNames from "classnames";

export default function ChatsLayout({params,children}) {
    return(       
        <div
            className="h-full flex flex-col"
        >
            <div className={classNames({
                "bg-white text-zinc-500": true, // colors
             })}>
                <h1>Layout Chat {params.chatId}</h1>
            </div>
            {children}
            <div className={classNames({
                "bg-white text-zinc-500": true, // colors
                "bottom-0": true,
             })}>
                Inserir Texto...
            </div>
        </div>
    );
};