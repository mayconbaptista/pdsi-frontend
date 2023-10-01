'use client';

import { UserMessage,BotMessage } from "@/app/components/messages/chatMessage"
import { MessageInput } from "@/app/components/inputs/messageInput"
import { useEffect, useRef, useState } from "react";

export default function Chat({ params }) {

  const scrollDiv = useRef();

  // Gambiarra 2000
  const [messages,SetMessages] = useState(
    [
      UserMessage(`Mensagem #3 ${params.chatId}  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid hic molestias dolore eum? Laboriosam adipisci fugit maxime harum dolorum eaque eveniet odit molestias repudiandae a. Maiores, aperiam praesentium! Laborum?`,2),
      BotMessage(`Mensagem #4 ${params.chatId} Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid hic molestias dolore eum? Laboriosam adipisci fugit maxime harum dolorum eaque eveniet odit molestias repudiandae a. Maiores, aperiam praesentium! Laborum?`,1),
    ]
  );

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
          {messages.map( message => (message))}
        </div>
        <MessageInput onSend={updateMessages}/>
        <div ref={scrollDiv}/>
      </div>
    );
  }