import React from 'react';
import backgroundPicture from '../assets/backgroundPicture.png';
import { Link } from 'react-router-dom';

function LostPasswordPage() {
    return (
        <div
            className="flex items-center justify-center h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundPicture})` }}
        >
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">I lost my password</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                            ID
                        </label>
                        <input
                            id="id"
                            type="text"
                            placeholder="ID"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                            type="button"
                        >
                            Send an email
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                </form>
                <div className="flex justify-between mt-4">
                    <Link to="/register" className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800">
                        Register
                    </Link>
                    <Link to="/login" className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LostPasswordPage;
