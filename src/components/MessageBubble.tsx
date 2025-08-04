import React from 'react';

interface Props {
  role: 'user' | 'assistant';
  content: string;
  onDelete: () => void;
  onEdit: (newContent: string) => void;
}

const MessageBubble = ({ role, content, onDelete, onEdit }: Props) => {
  const isUser = role === 'user';

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    onEdit(e.currentTarget.innerText);
  };

  return (
    <div className={`group relative flex items-start gap-2.5 ${isUser ? 'self-end' : 'self-start'}`}>
      <div className={`w-6 h-6 rounded-full flex-shrink-0 ${isUser ? 'bg-blue-500' : ''}`}>
        {!isUser && <img src="/Logo Only #1.png" alt="Assistant" className="w-full h-full" />}
      </div>
      <div className="message-bubble bg-gray-100 dark:bg-gray-700 p-3 rounded-lg max-w-lg">
        <div
          contentEditable
          suppressContentEditableWarning
          onBlur={handleBlur}
          className="focus:outline-none"
        >
          {content}
        </div>
        <div className="absolute bottom-1 right-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onEdit(content)}
            className="text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L14.732 3.732z" />
            </svg>
          </button>
          <button
            onClick={onDelete}
            className="text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V5a2 2 0 00-2-2h-3.382a1 1 0 00-.942.658L10 5h4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;