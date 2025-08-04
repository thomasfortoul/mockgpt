import React from 'react';

import { useState } from 'react';

interface Props {
  onSendMessage: (content: string) => void;
}

const ChatInput = ({ onSendMessage }: Props) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSendMessage(content);
      setContent('');
    }
  };

  return (
    <div className="chat-input p-4">
      <form onSubmit={handleSubmit} className="relative">
        <textarea
          placeholder="Message ChatGPT..."
          className="w-full p-3 pr-12 rounded-lg border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e as any);
            }
          }}
          rows={1}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-600"
          disabled={!content.trim()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </form>
      <p className="text-xs text-center text-gray-400 mt-2">
        ChatGPT can make mistakes. Consider checking important information.
      </p>
    </div>
  );
};

export default ChatInput;