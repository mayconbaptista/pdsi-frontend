const chatMessage = (msg,styleCustom) => {
    
    return(
        <div className="w-full my-5 flex flex-col">
            <div className={`
                py-3 px-5 
                max-w-80p w-fit 
                h-max
                border border-gray-200
                shadow-md
                mx-3
                ${styleCustom}
            `}>
                <p>{msg}</p>
            </div>
        </div>
    );
};

export const UserMessage = (msg) => {

    return chatMessage(
        msg,
        "rounded-borderMSg rounded-br-none self-end" 
    )
};

export const BotMessage = (msg) => {

    return chatMessage(
        msg,
        "rounded-borderMSg rounded-bl-none self-start"
    )
};

