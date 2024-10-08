"use client";

import { FC } from 'react';

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        className="rounded-2xl border-night border-2 text-black bg-linen px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-night"
        type="text"
        placeholder={placeholder}
      />
      <button className="bg-night text-white rounded-full p-2 hover:bg-gray-800 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
