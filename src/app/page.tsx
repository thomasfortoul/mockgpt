"use client"; // This is a client component

import { useState, useRef } from "react";
import html2canvas from 'html2canvas';
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";
import ChatInput from "@/components/ChatInput";

export interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

export default function Home() {
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'user', content: 'Hello, world!' },
    { id: 2, role: 'assistant', content: 'Hi there! How can I help you today?' },
  ]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      role: 'user', // For now, we'll just add user messages
      content,
    };
    setMessages([...messages, newMessage]);
  };

  const handleDeleteMessage = (id: number) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  const handleEditMessage = (id: number, newContent: string) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, content: newContent } : message
      )
    );
  };

  const handleDownload = () => {
    if (chatWindowRef.current) {
      html2canvas(chatWindowRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'mockgpt-chat.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  };

  return (
    <div className="relative z-0 flex h-full w-full overflow-hidden">
      <Sidebar />
      <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
        <Header onDownload={handleDownload} />
        <main className="flex-1 overflow-y-auto">
          <ChatWindow
            ref={chatWindowRef}
            messages={messages}
            onDeleteMessage={handleDeleteMessage}
            onEditMessage={handleEditMessage}
          />
        </main>
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
