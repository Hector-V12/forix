import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (id: string, password: string) => Promise<void>;
    register: (id: string, email: string, name: string, lastName: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        return !!localStorage.getItem('token');
    });

    async function login(id: string, password: string) {
        try {
            const response = await axios.post('https://api.forix-isep.com/auth', { id, password });
            localStorage.setItem('token', response.data.token);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Login failed:', error);
            throw new Error('Login failed');
        }
    }

    async function register(id: string, email: string, name: string, lastName: string, password: string) {
        try {
            const response = await axios.post('https://api.forix-isep.com/auth/register', { id, email, name, lastName, password });
            localStorage.setItem('token', response.data.token);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Registration failed:', error);
            throw new Error('Registration failed');
        }
    }

    function logout() {
        setIsAuthenticated(false);
        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
