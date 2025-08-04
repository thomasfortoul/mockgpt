import React from 'react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <aside className="flex h-full w-[var(--sidebar-width)] flex-col bg-token-sidebar-surface-primary p-2">
      <div className="flex-1">
        <div className="mb-2">
          <a href="/" className="flex items-center gap-2 rounded-lg p-2 text-lg font-semibold hover:bg-token-main-surface-secondary">
            <Image src="/Logo Only #1.png" alt="MockGPT Logo" width={28} height={28} />
            <span>MockGPT</span>
          </a>
        </div>
        <button className="flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-token-main-surface-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New chat
        </button>
        <div className="mt-4">
          <h2 className="px-2 text-xs font-semibold text-token-text-tertiary">Recent</h2>
          {/* Placeholder for conversation list */}
        </div>
      </div>
      <div className="border-t border-token-border-light pt-2">
        <a href="#" className="flex items-center gap-3 rounded-lg p-2 hover:bg-token-main-surface-secondary">
          <div className="h-7 w-7 rounded-full bg-brand-purple flex items-center justify-center text-white">
            U
          </div>
          <span className="text-sm font-medium">User</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;