import React, { useState } from 'react';
import axiosInstance from '../context/AxiosInstance';



function PostCreation() {
    const [postText, setPostText] = useState('');
    const userId = localStorage.getItem('Id'); // Remplacez 'defaultUserId' par une valeur par défaut appropriée

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const postData = {
            postText,
            userId
        };

        try {
            const response = await axiosInstance.post('https://api.forix-isep.com/posts', postData);
            console.log('Post created successfully:', response.data);
            // Réinitialiser le champ de texte après la création du post
            setPostText('');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
                <h1 className="text-2xl font-bold mb-4 text-center">Post something...</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Writing zone
                        </label>
                        <textarea
                            id="message"
                            placeholder="Type your message here..."
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                            className="w-full h-32 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PostCreation;
