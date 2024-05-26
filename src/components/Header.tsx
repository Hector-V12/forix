import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/forixLogo.png'; // Assurez-vous que le chemin est correct

function Header() {
    return (
        <header className="bg-purple-800 text-white py-2 px-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <img src={logo} alt="Logo" className="h-10 w-10" />
                <span className="font-bold text-xl">FORIX</span>
            </div>
            <div className="flex-grow mx-4">
                <input
                    type="text"
                    placeholder="Search here..."
                    className="w-full py-2 px-4 rounded-full text-gray-800"
                />
            </div>
            <nav className="flex items-center space-x-4">
                <Link to="/" className="font-semibold">FEED</Link>
                <Link to="/explore" className="font-semibold">EXPLORE</Link>
                <span className="font-semibold">Nicolas</span>
                <div className="bg-white text-gray-800 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                    </svg>
                </div>
            </nav>
        </header>
    );
}

export default Header;
