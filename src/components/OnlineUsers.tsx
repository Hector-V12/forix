import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface User {
    id: number;
    name: string;
    online: boolean;
}

function OnlineUsers() {
    const [onlineUsers, setOnlineUsers] = useState<User[]>([]);
    const [showOffline, setShowOffline] = useState(false);

    useEffect(() => {
        axios.get('https://api.forix-isep.com/users/online')
            .then(response => setOnlineUsers(response.data))
            .catch(error => console.error('Error fetching online users:', error));
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">En ligne</h2>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={showOffline}
                        onChange={() => setShowOffline(!showOffline)}
                        className="mr-2"
                    />
                    Afficher hors ligne
                </label>
            </div>
            {onlineUsers.map(user => (
                (user.online || showOffline) && (
                    <div key={user.id} className="flex items-center mb-4">
                        <div className="relative">
                            <div className={`absolute top-0 left-0 h-3 w-3 rounded-full ${user.online ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                            <Link to={`/user/${user.id}`} className="bg-gray-300 h-10 w-10 rounded-full mr-4"></Link>
                        </div>
                        <Link to={`/user/${user.id}`} className="font-bold">{user.name}</Link>
                    </div>
                )
            ))}
        </div>
    );
}

export default OnlineUsers;
