import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../context/AxiosInstance';
import logo from '../assets/forixLogo.png'; // Assurez-vous que le chemin est correct

interface User {
    id: string;
    name: string;
    lastName: string;
}

function Header() {
    const [user, setUser] = useState<User>();
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState<User[]>([]);
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(-1);

    useEffect(() => {
        const loggedUserId = localStorage.getItem('Id');
        if (loggedUserId) {
            axiosInstance.get(`https://api.forix-isep.com/users/${loggedUserId}`)
                .then(response => setUser(response.data))
                .catch(error => console.error('Error fetching user data:', error));
        }
    }, []);

    const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchText(query);

        if (query.length > 0) {
            try {
                const response = await axiosInstance.get('https://api.forix-isep.com/users/search', {
                    params: {
                        id: query
                    }
                });
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error searching users:', error);
            }
        } else {
            setSearchResults([]);
        }
    };

    const handleMouseEnter = (index: number) => {
        setSelectedIndex(index);
    };
    
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'ArrowDown') {
            setSelectedIndex((prevIndex) => (prevIndex + 1) % searchResults.length);
        } else if (event.key === 'ArrowUp') {
            setSelectedIndex((prevIndex) => (prevIndex - 1 + searchResults.length) % searchResults.length);
        } else if (event.key === 'Enter' && selectedIndex >= 0) {
            handleResultClick(searchResults[selectedIndex].id);
        }
    };
    
    const handleResultClick = (userId: string) => {
        setSearchText(''); // Clear the search bar
        setSearchResults([]); // Clear the search results
        setSelectedIndex(-1); // Reset selected index
        navigate(`/user?userId=${userId}`);
    };

    return (
        <header className="bg-purple-800 text-white py-2 px-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <Link to="/"><img src={logo} alt="Logo" className="h-10 w-10" /></Link>
                <span className="font-bold text-xl">FORIX</span>
            </div>
            <div className="relative flex-grow mx-4">
            <input
                type="text"
                placeholder="Search here..."
                className="w-full py-2 px-4 rounded-full text-gray-800"
                value={searchText}
                onChange={handleSearch}
                onKeyDown={handleKeyDown} // Add this line
            />
            {searchResults.length > 0 && (
                <ul className="absolute z-10 bg-white text-gray-800 w-full mt-1 rounded-lg shadow-lg">
                    {searchResults.map((result, index) => (
                        <li 
                            key={result.id} 
                            className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${index === selectedIndex ? 'bg-gray-300' : ''}`} // Highlight the selected result
                            onClick={() => handleResultClick(result.id)}
                            onMouseEnter={() => handleMouseEnter(index)}
                        >
                            {result.name} {result.lastName}
                        </li>
                    ))}
                </ul>
            )}
            </div>
            <nav className="flex items-center space-x-4">
                <Link to="/" className="font-semibold">FEED</Link>
                <Link to="/explore" className="font-semibold">EXPLORE</Link>
                <Link to="/accountSettings">
                    <div className=" text-gray-800 p-1 rounded-full flex justify-center">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    {user && (
                        <span className="font-semibold">{user.name}</span>
                    )}
                </Link>
            </nav>
        </header>
    );
}

export default Header;
