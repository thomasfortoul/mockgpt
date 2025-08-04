import React from 'react';

interface Props {
  onDownload: () => void;
}

const Header = ({ onDownload }: Props) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg">MockGPT</h1>
      <button
        onClick={onDownload}
        className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
      >
        Download as PNG
      </button>
    </header>
  );
};

export default Header;