import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import axiosInstance from '../context/AxiosInstance';
import UserInfo from './UserInfo';

interface Post {
    id: number;
    userId: string;
    postText: string;
}

function Posts({ depth }: { depth: number }) {
    const [posts, setPosts] = useState<Post[]>([]);
    const loggedUserId = localStorage.getItem('Id');

    useEffect(() => {
        axiosInstance.get('https://api.forix-isep.com/posts/feed', {
            params: {
                depth,
                recentWeight: 1,
                commonSubjectsWeight: 1,
                commonFriendsWeight: 1
            }
        })
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, [depth]);

    return (
        <div className="space-y-4">
            {posts.map(post => (
                <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            {post.userId === loggedUserId ? (
                                <div className="flex items-center">
                                    <Link to="/accountSettings" className="bg-gray-300 h-10 w-10 rounded-full mr-4"></Link>
                                    <div>
                                        <Link to="/accountSettings" className="font-bold"><UserInfo userId={post.userId} /></Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <Link to={`/user/${post.userId}`} className="bg-gray-300 h-10 w-10 rounded-full mr-4"></Link>
                                    <div>
                                        <Link to={`/user/${post.userId}`} className="font-bold"><UserInfo userId={post.userId} /></Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <p>{post.postText}</p>
                    <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                        Like
                    </button>
                </div>
            )).reverse()}
        </div>
    );
}

export default Posts;
