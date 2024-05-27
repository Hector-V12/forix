import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from '../context/AxiosInstance';

interface User {
    firstName: string;
    lastName: string;
}

function UserInfo({ userId }: { userId: number }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        axiosInstance.get(`https://api.forix-isep.com/users/${userId}`)
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching user info:', error));
    }, [userId]);

    return (
        <div className="text-center">
            <div className="bg-gray-300 h-32 w-32 rounded-full mx-auto mb-4"></div>
            {user && (
                <h1 className="text-2xl font-bold">{`${user.firstName} ${user.lastName}`}</h1>
            )}
        </div>
    );
}

export default UserInfo;
