import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const MessageInput = ({onSend}) => {

    const [userMessage,setUserMessage] = useState();

    // ON FORM SUBMIT
    async function sendMessage(e) {
        e.preventDefault();
        
        try {
            console.log("Mensagem enviada");

            setUserMessage("");
            onSend(userMessage);

        } catch (err) {
            console.error(`Error in sendMessage: ${err}`);
        }
        
    }


    return(
        <div className={`
            bg-white 
            text-gray-800 
            bottom-0 
            sticky 
            h-14 w-full
            z-10
        `}>
            <form
                method="POST"
                action=""
                onSubmit={sendMessage}
                className={`
                    flex flex-row flex-nowrap
                    justify-evenly items-center
                    m-2
                `}
            >
                <input 
                    name="userMessage"
                    type="text" 
                    value={userMessage}
                    onChange={ e => setUserMessage(e.target.value)}
                    placeholder="Mensagem"
                    autoCapitalize="sentences"
                    autoFocus
                    className="
                        p-2
                        w-11/12
                        rounded-[7px] 
                        border 
                        border-blue-gray-200
                        bg-transparent 
                        text-blue-gray-700 
                        outline outline-0
                        transition duration-500
                        focus:ring-1 ring-blue-300
                    "
                />
                <button 
                    type="submit" 
                    className="h-8 w-8"
                    title="msgUser"
                >
                    <PaperAirplaneIcon/>
                </button>
            </form>
        </div>
    );
}

export default MessageInput;