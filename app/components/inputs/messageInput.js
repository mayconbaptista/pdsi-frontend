import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useState } from "react";
import api from "@/app/api/api";
import axios from "axios";
import { headers } from "@/next.config";
import { signIn } from "next-auth/react";
import { userSession } from "@/app/api/auth/customSession";


export const MessageInput = ({onUserSend,onResponse,newChat}) => {

    const [userMessage,setUserMessage] = useState();
    const [creativeChefMode,setCreativeChefMode] = useState(false);

    // ON FORM SUBMIT
    async function sendMessage(e) {

        e.preventDefault();

        onUserSend(userMessage);
        setUserMessage(""); // Limpar input


        try {

            const session = await userSession();
            
            // Renovar token usuario
            
            const responseToken = await api.post('/v1/sso/token',{
                username: session.username,
                password: session.password
            });


            const response = await api.post('v1/question',{
                
                message: userMessage,
                randomness: creativeChefMode ? 0.9 : 0.5
                
            },{
                headers:{
                    Authorization: "Bearer "+ responseToken.data.accessToken
                }
                
            }
            )
            console.log(response.data);
            onResponse(response.data.answer,response.data.questionId);
        
        } catch (err) {
            console.error(`Error in sendMessage: ${err}`);
        } finally {
            // Recolocar no Try
            console.log("Mensagem enviada");
        }
        
    }


    return(
        <div className={`
            bg-text 
            text-white
            bottom-0 
            sticky 
            h-14 w-full
            z-10
            relative
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
                    placeholder="Digite uma mensagem..."
                    autoCapitalize="sentences"
                    autoFocus
                    required
                    autoComplete="not"
                    className="
                        p-2
                        w-11/12
                        rounded-[7px] 
                        border-0
                        bg-transparent 
                        text-white
                        outline outline-0
                        transition duration-500
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
            <button className={classNames({
                "absolute -top-9 right-2": true,
                "py-1 px-3": true,
                "border-1 border-black rounded-lg": true,
                "bg-gray-300 text-text hover:bg-gray-500 hover:text-gray-100": !creativeChefMode,
                "bg-confirm text-white hover:bg-confirm/[1]": creativeChefMode,
                "bg-opacity-60":true,
                "transition duration-300":true,
            })}
            onClick={() => {
                setCreativeChefMode(!creativeChefMode);
            }}
            >
                Chefe Criativo
            </button>
        </div>
    );
}

export default MessageInput;