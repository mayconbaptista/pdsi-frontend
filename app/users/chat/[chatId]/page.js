import { UserMessage,BotMessage } from "@/app/components/messages/chatMessage"

export default function Chat({ params }) {
    return (
      <div>
        {UserMessage(`Mensagem #1 ${params.chatId}`)}
        {BotMessage(`Mensagem #2 ${params.chatId}`)}
        {UserMessage(`Mensagem #3 ${params.chatId}  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid hic molestias dolore eum? Laboriosam adipisci fugit maxime harum dolorum eaque eveniet odit molestias repudiandae a. Maiores, aperiam praesentium! Laborum?`)}
        {BotMessage(`Mensagem #4 ${params.chatId} 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid hic molestias dolore eum? Laboriosam adipisci fugit maxime harum dolorum eaque eveniet odit molestias repudiandae a. Maiores, aperiam praesentium! Laborum?`)}
        {UserMessage(`Mensagem #5 ${params.chatId}`)}
        {BotMessage(`Mensagem #6 ${params.chatId}`)}
        {UserMessage(`Mensagem #7 ${params.chatId}`)}
        {BotMessage(`Mensagem #8 ${params.chatId}`)}
        {UserMessage(`Mensagem #9 ${params.chatId}`)}
        {BotMessage(`Mensagem #10 ${params.chatId}`)}
        {UserMessage(`Mensagem #11 ${params.chatId}`)}
        {BotMessage(`Mensagem #12 ${params.chatId}`)}
        {UserMessage(`Mensagem #13 ${params.chatId}`)}
        {BotMessage(`Mensagem #14 ${params.chatId}`)}
        {UserMessage(`Mensagem #15 ${params.chatId}`)}
        {BotMessage(`Mensagem #16 ${params.chatId}`)}
        {UserMessage(`Mensagem #17 ${params.chatId}`)}
        {BotMessage(`Mensagem #18 ${params.chatId}`)}
        {UserMessage(`Mensagem #19 ${params.chatId}`)}
        {BotMessage(`Mensagem #20 ${params.chatId}`)}
        {UserMessage(`Mensagem #21 ${params.chatId}`)}
        {BotMessage(`Mensagem #22 ${params.chatId}`)}
        {UserMessage(`Mensagem #23 ${params.chatId}`)}
      </div>
    );
  }