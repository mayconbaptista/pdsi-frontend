'use client';

import { UserMessage,BotMessage } from "@/app/components/messages/chatMessage"
import { MessageInput } from "@/app/components/inputs/messageInput"
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { isUserBase } from "@/app/api/auth/customSession";
import api from "@/app/api/api";

export default function Chat({ params }) {

  const scrollDiv = useRef();
  const router = useRouter();

  // Gambiarra 2000
  const [messages,SetMessages] = useState([]);

  const lId = useRef(0);

  const onPageLoad = useCallback( async () => {
    try{
      // Proteger urls Usuários gratis
      const userType = await isUserBase();
      if(userType && params.chatId != 'new') {
        router.replace("/users");
      }

      // Buscar mensagens
      if(params.chatId == 'new') {
        return;
      }

      // Renovar token admin
      const username = 'test2';

      const responseToken = await api.post('/v1/sso/token',{      
        username: 'admin',
        password: 'admin'   
      });
      
      const response = await api.get(`v1/question/${username}/latest`,{
        headers:{
          Authorization: "Bearer "+ responseToken.data.accessToken
        }   
      });

      const chat = response.data.find( item => item.questionId == params.chatId);

      console.log("page Chats",chat);
      SetMessages(messages => [...messages,UserMessage(chat.question,lId.current),BotMessage(chat.answer,chat.questionId)]);
      lId.current++;

    }catch (err) {
      console.log("Error in onPageLoad:users/chat/page",err);
    }
  },[router,params]);

  useEffect( () => {
    onPageLoad();
  },[onPageLoad]);

  useEffect( () => {
    scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
  },[messages]);
  
  const addUserMessage = (message) => {
    lId.current++;
    SetMessages(messages => [...messages,UserMessage(message,lId.current)]);
  }
  
  const addBotMessage = (message,id) => {
    lId.current++;
    SetMessages(messages => [...messages,BotMessage("Minha resposta: "+ message,id)]);
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