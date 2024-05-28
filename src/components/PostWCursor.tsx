import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../context/AxiosInstance';
import UserInfo from './UserInfo';

interface Post {
    id: number;
    userId: string;
    postText: string;
    createdAt: string; // Ajout du champ createdAt
}

function PostsWCursor({ depth }: { depth: number }) {
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

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        // Ajouter le suffixe pour le jour (1st, 2nd, 3rd, etc.)
        const getDayWithSuffix = (day: number) => {
            if (day > 3 && day < 21) return `${day}th`;
            switch (day % 10) {
                case 1: return `${day}st`;
                case 2: return `${day}nd`;
                case 3: return `${day}rd`;
                default: return `${day}th`;
            }
        };

        return `${getDayWithSuffix(day)} ${month} ${year}`;
    };

    return (
        <div className="space-y-4">
            {posts.reverse().map(post => (
                <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                                <div className="flex items-center">
                                    <Link to={`/user?userId=${post.userId}`} className="bg-gray-300 h-10 w-10 rounded-full mr-4"></Link>
                                    <div>
                                        <Link to={`/user?userId=${post.userId}`} className="font-bold"><UserInfo userId={post.userId} /></Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <p>{post.postText}</p>
                    <p className="mt-4 text-gray-600">{formatDate(post.createdAt)}</p>
                    <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                        Like
                    </button>
                </div>
            )).reverse()}
        </div>
    );
}

export default PostsWCursor;
