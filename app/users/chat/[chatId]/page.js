'use client';

import { UserMessage,BotMessage } from "@/app/components/messages/chatMessage"
import { MessageInput } from "@/app/components/inputs/messageInput"
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Chat({ params }) {

  const scrollDiv = useRef();
  const router = useRouter();  

  // Gambiarra 2000
  const [messages,SetMessages] = useState([]);

  let lId = messages.length;

  // Verificar como fazer da maneira correta
  // useEffect( () => {
  //   if(params.chatId != 'a' && params.chatId != 'b'){
  //     router.replace("/users");
  //   }
  // },[router,params]);

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
        <MessageInput onSend={updateMessages}/>
        <div ref={scrollDiv}/>
      </div>
    );
  }