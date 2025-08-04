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
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 rounded-l bg-gray-700 text-white focus:outline-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ChatInput;