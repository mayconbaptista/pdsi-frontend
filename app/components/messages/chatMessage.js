const chatMessage = (id,msg,styleCustom) => {
    
    return(
        <div className="w-full my-5 flex flex-col" key={id}>
            <div className={`
                py-3 px-5 
                max-w-80p w-fit 
                h-max
                border border-gray-200
                shadow-md
                mx-3
                ${styleCustom}
            `}>
                <p className="break-words">{msg}</p>
            </div>
        </div>
    );
};

export const UserMessage = (msg, id) => {

    return chatMessage(
        id,
        msg,
        "rounded-borderMSg rounded-br-none self-end" 
    )
};

export const BotMessage = (msg, id) => {

    return chatMessage(
        id,
        msg,
        "rounded-borderMSg rounded-bl-none self-start"
    )
};

