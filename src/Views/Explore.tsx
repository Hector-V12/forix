import React, { useState } from 'react';
import FriendRecommendationsWithCursor from '../components/FriendsRecommendationWCursors';
import PostWithCursor from '../components/PostWCursor';
import OnlineUsers from '../components/OnlineUsers';

function Explore() {
    const [depth, setDepth] = useState(1);
    const [savedDepth, setSavedDepth] = useState(1);

    const handleSaveDepth = () => {
        setSavedDepth(depth);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-8">
                <div className="mb-8 text-center">
                    <h2 className="text-xl font-semibold">Proximité des propositions</h2>
                    <div className="relative w-full">
                        <input
                            type="range"
                            min="1"
                            max="5"
                            value={depth}
                            onChange={(e) => setDepth(Number(e.target.value))}
                            className="w-full"
                        />
                        <div className="absolute left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow text-center">
                            {depth}
                        </div>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                        <span>1</span>
                        <span>5</span>
                    </div>
                    <button
                        onClick={handleSaveDepth}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Enregistrer
                    </button>
                </div>
                <div className="flex space-x-4">
                    <div className="w-1/4">
                        <OnlineUsers />
                    </div>
                    <div className="w-1/2">
                        <PostWithCursor depth={savedDepth} />
                    </div>
                    <div className="w-1/4">
                        <FriendRecommendationsWithCursor depth={savedDepth} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
