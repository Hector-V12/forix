import React from 'react';
import { useParams } from 'react-router-dom';
import UserInfo from '../components/UserInfo';
import UserPreferences from '../components/UserPreferences';
import UserPosts from '../components/UserPost';

function UserProfile() {
    const { userId } = useParams<{ userId: string }>();

    if (!userId) {
        return <div className="text-center text-red-500">User ID is missing.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <UserInfo userId={parseInt(userId, 10)} />
                <UserPreferences userId={parseInt(userId, 10)} />
                <UserPosts userId={parseInt(userId, 10)} />
            </div>
        </div>
    );
}

export default UserProfile;
