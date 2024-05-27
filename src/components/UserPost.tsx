import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from '../context/AxiosInstance';

interface Post {
    id: number;
    user: string;
    content: string;
    category: string;
}

function UserPosts({ userId }: { userId: number }) {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axiosInstance.get(`https://api.forix-isep.com/posts/${userId}`)
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching user posts:', error));
    }, [userId]);

    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Derniers Posts :</h2>
            <div className="space-y-4 h-96 overflow-y-scroll">
                {posts.map(post => (
                    <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <div className="bg-gray-300 h-10 w-10 rounded-full mr-4"></div>
                                <div>
                                    <p className="font-bold">{post.user}</p>
                                </div>
                            </div>
                            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">{post.category}</span>
                        </div>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserPosts;
