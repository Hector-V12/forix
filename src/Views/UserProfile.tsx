import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../context/AxiosInstance';

// Interface pour les données de publication
interface Post {
    id: number;
    postText: string;
    userId: string;
    createdAt: string;
}

// Interface pour les sujets d'intérêt
interface Subject {
    subjectName: string;
}

// Interface pour les amis
interface Friend {
    id: string;
    email: string;
    name: string;
    lastName: string;
    role: string;
}

// Interface pour les données utilisateur
interface User {
    id: string;
    email: string;
    role: string;
    name: string;
    lastName: string;
    posts: Post[];
    subjects: Subject[];
    friends: Friend[];
}

// Fonction pour récupérer les données utilisateur
const fetchUserData = async (userId: string, setUser: React.Dispatch<React.SetStateAction<User | null>>, checkIfFriend: (friends: Friend[], userId: string) => void) => {
    try {
        // Récupérer les données de l'utilisateur à afficher
        const userResponse = await axiosInstance.get(`https://api.forix-isep.com/users/${userId}`);
        console.log(userResponse.data)
        setUser(userResponse.data);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};

// Fonction pour vérifier si l'utilisateur à afficher est déjà un ami
const fetchLoggedUserData = async (loggedUserId: string, userId: string, checkIfFriend: (friends: Friend[], userId: string) => void) => {
    try {
        const loggedUserResponse = await axiosInstance.get(`https://api.forix-isep.com/users/${loggedUserId}`);
        const loggedUser = loggedUserResponse.data;
        checkIfFriend(loggedUser.friends, userId);
    } catch (error) {
        console.error('Error fetching logged user data:', error);
    }
};

// Fonction pour vérifier si l'utilisateur est un ami
const checkIfFriend = (friends: Friend[], userId: string) => {
    const friendIds = friends.map(friend => friend.id);
    return friendIds.includes(userId);
};

const UserProfile: React.FC = () => {
    const location = useLocation();
    const userId = new URLSearchParams(location.search).get('userId');
    const loggedUserId = localStorage.getItem('userId');
    const [user, setUser] = useState<User | null>(null); // Initialiser avec null
    const [isFriend, setIsFriend] = useState(false);
    
    useEffect(() => {
        if (userId) {
            // Récupérer les données utilisateur et vérifier l'amitié
            fetchUserData(userId, setUser, (friends, userId) => setIsFriend(checkIfFriend(friends, userId)));
            //fetchLoggedUserData(loggedUserId, userId, (friends, userId) => setIsFriend(checkIfFriend(friends, userId)));
        }
    }, [userId]);

    const handleAddFriend = () => {
        if (!isFriend && userId) {
            axiosInstance.post(`https://api.forix-isep.com/users/friend/${userId}`)
                .then(response => {
                    setIsFriend(true);
                    alert('Ami ajouté avec succès !'); // Afficher une alerte de succès
                })
                .catch(error => {
                    console.error('Error adding friend:', error);
                    alert("Erreur lors de l'ajout de l'ami."); // Afficher une alerte d'échec
                });
        }
    };

    if (!user) {
        console.log('Loading...');
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
            <div className="flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
                <div className="ml-4">
                    <h1 className="text-2xl font-bold">{`${user.name} ${user.lastName}`}</h1>
                    {userId === loggedUserId ? (
                        <Link to="/accountSettings">
                            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
                                Account Settings
                            </button>
                        </Link>
                    ) : (
                        <button
                            onClick={handleAddFriend}
                            className={`mt-2 px-4 py-2 rounded ${isFriend ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                            disabled={isFriend}
                        >
                            {isFriend ? 'Déjà ami(e)' : 'Ajoutez-en ami'}
                        </button>
                    )}
                </div>
            </div>
            <div className="flex mt-4 space-x-2">
                {user.subjects.map((subject, index) => (
                    <button key={index} className="px-4 py-2 bg-gray-200 rounded">{subject.subjectName}</button>
                ))}
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-bold">Derniers Posts :</h2>
                {user.posts.map(post => (
                    <div key={post.id} className="mt-4 p-4 bg-gray-100 rounded-lg shadow">
                        <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                            <span className="ml-2 font-bold">{user.name}</span>
                        </div>
                        <p>{post.postText}</p>
                        <div className="mt-2 flex space-x-4">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded">Like</button>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded">Super like</button>
                        </div>
                    </div>
                )).reverse()}
            </div>
        </div>
    );
};


export default UserProfile;
