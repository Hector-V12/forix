import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface User {
    id: number;
    name: string;
    interests: string[];
}

function FriendRecommendations() {
    const [friends, setFriends] = useState<User[]>([]);

    useEffect(() => {
        axios.get('http://api.forix-isep.com/users/friendRecommendation', {
            params: {
                depth: 1,
                commonFriendsWeight: 1,
                commonSubjectsWeight: 1
            }
        })
            .then(response => setFriends(response.data))
            .catch(error => console.error('Error fetching friend recommendations:', error));
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs">
            <h2 className="text-xl font-semibold mb-4">Suggestions d'amis</h2>
            {friends.map(friend => (
                <div key={friend.id} className="mb-4">
                    <div className="flex items-center">
                        <Link to={`/user/${friend.id}`} className="bg-gray-300 h-10 w-10 rounded-full mr-4"></Link>
                        <div>
                            <Link to={`/user/${friend.id}`} className="font-bold">{friend.name}</Link>
                            <div className="flex flex-wrap">
                                {friend.interests.map((interest, index) => (
                                    <span key={index} className="bg-gray-200 rounded-full px-2 py-1 text-xs mr-2 mt-2">
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FriendRecommendations;
