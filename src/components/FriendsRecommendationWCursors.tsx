import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface User {
    id: number;
    name: string;
    lastName: string;
}


function FriendRecommendations({ depth }: { depth: number }) {
    const [friends, setFriends] = useState<User[]>([]);

    useEffect(() => {
        axios.get('https://api.forix-isep.com/users/friendRecommendation', {
            params: {
                depth,
                commonFriendsWeight: 1,
                commonSubjectsWeight: 1
            }
        })
            .then(response => setFriends(response.data))
            .catch(error => console.error('Error fetching friend recommendations:', error));
    }, [depth]);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs">
            <h2 className="text-xl font-semibold mb-4">Suggestions d'amis</h2>
            {friends.map(friend => (
                <div key={friend.id} className="mb-4">
                    <div className="flex items-center">
                        <Link to={`/user/${friend.id}`} className="bg-gray-300 h-10 w-10 rounded-full mr-4"></Link>
                        <div>
                            <Link to={`/user/${friend.id}`} className="font-bold">{friend.name} {friend.lastName}</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FriendRecommendations;
