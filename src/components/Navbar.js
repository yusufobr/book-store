import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="bg-white border-b-2 border-gray-300">
      <div className="flex justify-between items-center container px-4 mx-auto py-8">
        <div className="flex justify-between items-center gap-12">
          <div className="text-3xl capitalize font-bold text-[#0290ff]">
            <Link to="/">Bookstore CMS</Link>
          </div>
          <nav className="flex gap-8 text-gray-400">
            <NavLink to="/">Books</NavLink>
            <NavLink to="/categories">category</NavLink>
          </nav>
        </div>
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-12 h-12 text-[#0290ff] -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
