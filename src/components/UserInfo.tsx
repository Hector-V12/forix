import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from '../context/AxiosInstance';

interface User {
    id: string;
    email: string;
    name: string;
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
            {user && (
                <h1 className="text-2xl font-bold">{`${user.name} ${user.lastName}`}</h1>
            )}
        </div>
    );
}

export default UserInfo;
