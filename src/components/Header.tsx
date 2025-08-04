import React from 'react';

interface Props {
  onDownload: () => void;
}

const Header = ({ onDownload }: Props) => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-token-main-surface-primary px-4 pt-3.5 pb-3.5 h-[var(--header-height)]">
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-semibold">ChatGPT 3.5</h1>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <button
        onClick={onDownload}
        className="flex items-center gap-2 rounded-lg py-2 px-3 text-sm font-medium hover:bg-token-main-surface-secondary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16M12 4v16" />
        </svg>
        Share
      </button>
    </header>
  );
};

export default Header;