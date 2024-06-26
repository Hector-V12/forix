import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function AccountSettings() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const { logout } = useAuth();

    const handleNotificationToggle = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };

    const handleLogout = () => {
        logout();
        window.location.href = '/login';
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl relative">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
                    <div className="bg-gray-300 h-10 w-10 rounded-full mr-4"></div>
                </div>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Username"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
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
                            placeholder="Password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notifications">
                            Notifications
                        </label>
                        <div className="flex items-center">
                            <input
                                id="notifications"
                                type="checkbox"
                                checked={notificationsEnabled}
                                onChange={handleNotificationToggle}
                                className="mr-2"
                            />
                            <span>Enable notifications</span>
                        </div>
                    </div>
                    <div className="flex justify-between mt-8">
                        <button
                            type="submit"
                            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                        >
                            Save Settings
                        </button>
                        <button
                            type="button"
                            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800"
                        >
                            Delete Account
                        </button>
                    </div>
                </form>
                <button
                    onClick={handleLogout}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default AccountSettings;
