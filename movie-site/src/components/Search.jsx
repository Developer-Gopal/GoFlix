import React, { useEffect } from "react";
import { useState } from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="text-white bg-white/20 p-2 rounded-2xl">
      <div className="flex">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search Your Fav Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent outline-none border-none text-white placeholder-gray-200 px-2"
        />
      </div>
    </div>
  );
};

export default Search;
