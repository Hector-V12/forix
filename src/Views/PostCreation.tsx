import React from 'react';

function PostCreation() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
                <h1 className="text-2xl font-bold mb-4 text-center">Post something...</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="theme">
                            Choose a theme:
                        </label>
                        <button className="bg-purple-800 text-white py-2 px-4 rounded">Theme</button>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Writing zone
                        </label>
                        <textarea
                            id="message"
                            placeholder="Type your message here..."
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
