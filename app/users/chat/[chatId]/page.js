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

  const lId = useRef(0);

  useEffect( () => {
    scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
  },[messages]);
  
  const addUserMessage = (message) => {
    lId.current++;
    SetMessages(messages => [...messages,UserMessage(message,lId.current)]);
  }
  
  const addBotMessage = message => {
    lId.current++;
    SetMessages(messages => [...messages,BotMessage("Minha resposta: "+ message,lId.current)]);
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
      <MessageInput onUserSend={addUserMessage} onResponse={addBotMessage} newChat={params.chatId == 'new'}/>
      <div ref={scrollDiv}/>
    </div>
  );
}