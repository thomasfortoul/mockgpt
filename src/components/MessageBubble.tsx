import React from 'react';

interface Props {
  role: 'user' | 'assistant';
  content: string;
  onDelete: () => void;
  onEdit: (newContent: string) => void;
}

const MessageBubble = ({ role, content, onDelete, onEdit }: Props) => {
  const isUser = role === 'user';
  const bubbleClasses = isUser
    ? 'bg-blue-500 text-white self-end'
    : 'bg-gray-700 text-white self-start';

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    onEdit(e.currentTarget.innerText);
  };

  return (
    <div className={`group relative p-3 rounded-lg max-w-lg ${bubbleClasses}`}>
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={handleBlur}
        className="focus:outline-none focus:ring-2 focus:ring-white rounded"
      >
        {content}
      </div>
      <button
        onClick={onDelete}
        className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
      >
        X
      </button>
    </div>
  );
};

export default MessageBubble;