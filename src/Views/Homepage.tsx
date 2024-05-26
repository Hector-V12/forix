import React from 'react';
import FriendRecommendations from '../components/FriendRecommendations';
import Post from '../components/Post';
import OnlineUsers from '../components/OnlineUsers';

function Homepage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-8 flex space-x-4">
                <div className="w-1/4">
                    <OnlineUsers />
                </div>
                <div className="w-1/2">
                    <Post />
                </div>
                <div className="w-1/4">
                    <FriendRecommendations />
                </div>
            </div>
        </div>
    );
}

export default Homepage;
