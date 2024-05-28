import React from 'react';
import { useParams } from 'react-router-dom';

interface User {
    id: string;
    email: string;
    name: string;
    lastName: string;
}

function UserProfile({ userId }: { userId: number }) {
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

function () {
    const { userId } = useParams<{ userId: string }>();

    if (!userId) {
        return <div className="text-center text-red-500">User ID is missing.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            </div>
        </div>
    );
}

export default UserProfile;
