import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useState } from "react";
import api from "@/app/api/api";
import axios from "axios";
import { headers } from "@/next.config";
import { signIn } from "next-auth/react";

export const MessageInput = ({onUserSend,onResponse,newChat}) => {

    const [userMessage,setUserMessage] = useState();
    const [creativeChefMode,setCreativeChefMode] = useState(false);

    // ON FORM SUBMIT
    async function sendMessage(e) {

        e.preventDefault();

        onUserSend(userMessage);
        setUserMessage(""); // Limpar input

        try {
            
            // Renovar token usuario
            const responseToken = await api.get('/v1/sso/token',{
                data: {
                    username: 'test',
                    password: 'Test@123'
                }
            });

            console.log(responseToken);

            const response = await api.post('v1/question',{
                
                message: userMessage,
                randomness: creativeChefMode ? 0.9 : 0.5
                
            },{
                headers:{
                    Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJaXzg2UlhKV0ptMmlkVW5rMUg4WkVXQU1zNm4tZ3c5ZTFoVzk2X25OOVFrIn0.eyJleHAiOjE2OTk3MzA3OTgsImlhdCI6MTY5OTczMDQ5OCwianRpIjoiODI3MDFkZDItNDZkZS00ZGE5LTg0OWMtZmI2ZTQ2MGRmMTY2IiwiaXNzIjoiaHR0cDovL2tleWNsb2FrOjgwODAvcmVhbG1zL2N1bGluYXJ5LWFuc3dlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIzMGJmNmU0Zi1hMjdkLTRlZjUtODZlYS04YzYyMjQ2Y2I0OTciLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJiYWNrZW5kLXNlcnZpY2UiLCJzZXNzaW9uX3N0YXRlIjoiY2VkM2ZlNjctYzZiMS00YzdjLWJlODYtNzFlZDAyZWFjNWViIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZnJlZS1xdWVzdGlvbiIsImRlZmF1bHQtcm9sZXMtcXVhcmt1cyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiY2VkM2ZlNjctYzZiMS00YzdjLWJlODYtNzFlZDAyZWFjNWViIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiVGVzdGUgUXVhbHF1ZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0IiwiZ2l2ZW5fbmFtZSI6IlRlc3RlIFF1YWxxdWVyIiwiZW1haWwiOiJ0ZXN0QHBkc2kuY29tIn0.IrYODsBSOMY6Z10y1Vo0oQ-ux0qtQhrhqzVmfZRRTRpVNU7W0IkqPf6g12jv4TBdVOQ9-6ijKIN3S64GpLvHFk8MYbAjwK-5RKjLBj8uRc3Wt9xKf8WB2ICoM9gXivDQKTzsGvMVddbjrIehDoX5t3MWDkZnXROF6IuHbxwy186y5TXFpw-btm6GvbJc858W_8LjoSe16E6ep7GEJTRZlUdpa-YJVA-uebjXggP8KOA9vX2YOZ8C1SbEjniBWDFPUYlN56Q-cCagb6WqZqvbYGqJduo7Oe9G2AtJQ7GBq852URyC4mLLxTvv6R5rOBWNwZnpMrAdgAnNvp4SGfbluw",
                }
                
            }
            )
            console.log(response.data);
            onResponse(response.data.answer);
                
            // const options2 = {
            //     method: 'POST',
            //     url: 'http://localhost:8081/v1/question',
            //     headers: {
            //       'Content-Type': 'application/json',
            //       Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJaXzg2UlhKV0ptMmlkVW5rMUg4WkVXQU1zNm4tZ3c5ZTFoVzk2X25OOVFrIn0.eyJleHAiOjE2OTk3MzAyMTIsImlhdCI6MTY5OTcyOTkxMiwianRpIjoiZmEyZDhiODQtYWRiNy00MjM2LTkxNWEtZDM5MmJlMzA5M2E4IiwiaXNzIjoiaHR0cDovL2tleWNsb2FrOjgwODAvcmVhbG1zL2N1bGluYXJ5LWFuc3dlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIzMGJmNmU0Zi1hMjdkLTRlZjUtODZlYS04YzYyMjQ2Y2I0OTciLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJiYWNrZW5kLXNlcnZpY2UiLCJzZXNzaW9uX3N0YXRlIjoiYzU3MzQ5NTgtYjgyNy00ZTViLWIxYzQtZTU0ZDI1NGFlNzBjIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZnJlZS1xdWVzdGlvbiIsImRlZmF1bHQtcm9sZXMtcXVhcmt1cyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiYzU3MzQ5NTgtYjgyNy00ZTViLWIxYzQtZTU0ZDI1NGFlNzBjIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiVGVzdGUgUXVhbHF1ZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0IiwiZ2l2ZW5fbmFtZSI6IlRlc3RlIFF1YWxxdWVyIiwiZW1haWwiOiJ0ZXN0QHBkc2kuY29tIn0.mmEcqN60gP38qz9qJkKqYTWOPIOdgEgci5IRa3yyLProfK439QlbhOM08AakQbtn3hPG2qODR2EioNB5702aRmX6o6pqiFsJN2LUUCpE-Bf0B3l70J7OJwFK2aysNa6J5H_DwL-zzeq6A2z5gWVa0rQXGB7wNkfyBxOGAd_qXELFhnEpr_bYn3JzvCoOjQYuXwL91AmUqUH7aQVGJKoQyVUsFBwwgB0YcZubDSs09jrI4mQjO8DZ395xytdzUS-BG6pPOzCMpF6Rejb2-oPhfV6BqvLP6MdA_oW81kmFDXG2LqOzXQFZK4vTIJbrMbWBBrtiPLtOIMB7y2x3wE3rRQ'
            //     },
                
            // };
            // axios.request(options2).then(function (response) {
            //     console.log(response.data);
            //     onResponse(response.data.answer);
            // }).catch(function (error) {
            //     console.error(error);
            // });
        
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