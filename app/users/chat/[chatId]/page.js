'use client';

import { UserMessage,BotMessage } from "@/app/components/messages/chatMessage"
import { MessageInput } from "@/app/components/inputs/messageInput"
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { isUserBase } from "@/app/api/auth/customSession";

export default function Chat({ params }) {

  const scrollDiv = useRef();
  const router = useRouter();

  const onPageLoad = useCallback( async () => {
    try{
      // Proteger urls Usuários gratis
      const userType = await isUserBase();
      if(userType && params.chatId != 'new') {
        router.replace("/users");
      }
    }catch (err) {
      console.log("Error in onPageLoad:users/chat/page",err);
    }
  },[router,params]);

  useEffect( () => {
    onPageLoad();
  },[onPageLoad]);

  // Gambiarra 2000
  const [messages,SetMessages] = useState([]);

  let lId = messages.length;

  useEffect( () => {
    scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
  },[messages]);

  const updateMessages = (newMsg) => {
    lId++
    SetMessages([...messages,UserMessage(newMsg,lId),BotMessage(`Minha Resposta: ${newMsg}`,lId+1)]);
    lId++
  }

    return (
      <div className="flex flex-col w-full">
        <div className="min-h-chat">
          {messages.length ? (
            messages.map( message => (message))
          ) : (
            <div className="min-h-chat flex justify-center items-center font-bold text-text">Envie uma mensagem para começar</div>
          )}
        </div>
        <MessageInput onSend={updateMessages} newChat={params.chatId == 'new'}/>
        <div ref={scrollDiv}/>
      </div>
    );
  }