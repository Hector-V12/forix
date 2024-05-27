import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../context/AxiosInstance';
import backgroundPicture from '../assets/backgroundPicture.png';

function LoginPage() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await login(id, password);
            window.location.href = '/';
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundPicture})` }}
        >
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md w-full max-w-md relative">
                <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                            ID
                        </label>
                        <input
                            id="id"
                            type="text"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="ID"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                        >
                            Login
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                </form>
                <div className="flex justify-between mt-4">
                    <a href="/register" className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800">
                        Register
                    </a>
                    <a href="/passwordLost" className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800">
                        I lost my password
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
