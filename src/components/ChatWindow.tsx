import React, { forwardRef } from 'react';
import { Message } from '@/app/page';
import MessageBubble from './MessageBubble';

interface Props {
  messages: Message[];
  onDeleteMessage: (id: number) => void;
  onEditMessage: (id: number, newContent: string) => void;
}

const ChatWindow = forwardRef<HTMLDivElement, Props>(
  ({ messages, onDeleteMessage, onEditMessage }, ref) => {
    return (
      <main ref={ref} className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            role={message.role}
            content={message.content}
            onDelete={() => onDeleteMessage(message.id)}
            onEdit={(newContent) => onEditMessage(message.id, newContent)}
          />
        ))}
      </main>
    );
  }
);

ChatWindow.displayName = 'ChatWindow';

export default ChatWindow;