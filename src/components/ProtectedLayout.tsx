import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const ProtectedLayout = () => {
    return (
        <div id="top" className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
        </div>
    );
};

export default ProtectedLayout;
