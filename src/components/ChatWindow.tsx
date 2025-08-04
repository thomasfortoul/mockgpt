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
      <div ref={ref} className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-10">
          {messages.length === 0 ? (
            <div className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-gray-700 p-2">
                <Image src="/Logo Only #1.png" alt="MockGPT Logo" width={32} height={32} />
              </div>
              <h2 className="text-2xl font-semibold">How can I help you today?</h2>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  role={message.role}
                  content={message.content}
                  onDelete={() => onDeleteMessage(message.id)}
                  onEdit={(newContent) => onEditMessage(message.id, newContent)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

ChatWindow.displayName = 'ChatWindow';

export default ChatWindow;