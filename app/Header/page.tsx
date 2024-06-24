"use client"; // This is a client component 
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isDrawerOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link href="/">
            Wardrobe Seller Center
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/home">
            <p className="hover:text-gray-400">Home</p>
          </Link>
          <Link href="/products">
            <p className="hover:text-gray-400">Products</p>
          </Link>
          <Link href="/about">
            <p className="hover:text-gray-400">About Us</p>
          </Link>
          <Link href="/contacts">
            <p className="hover:text-gray-400">Contact</p>
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={isDrawerOpen}
            className="focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <Link onClick={isDrawerOpen} href="/">
            <p className="block py-2 px-4 hover:bg-gray-700">Home</p>
          </Link>
          <Link onClick={isDrawerOpen} href="/products">
            <p className="block py-2 px-4 hover:bg-gray-700">Products</p>
          </Link>
          <Link onClick={isDrawerOpen} href="/about">
            <p className="block py-2 px-4 hover:bg-gray-700">About Us</p>
          </Link>
          <Link onClick={isDrawerOpen} href="/contacts">
            <p className="block py-2 px-4 hover:bg-gray-700">Contact</p>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
