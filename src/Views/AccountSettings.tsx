import React, { useState } from 'react';

function AccountSettings() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    const handleNotificationToggle = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl relative">
                <div className="absolute top-4 right-4">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="User Avatar"
                        className="h-12 w-12 rounded-full"
                    />
                </div>
                <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
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
            </div>
        </div>
    );
}

export default AccountSettings;
