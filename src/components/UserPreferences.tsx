import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Preference {
    id: number;
    name: string;
}

function UserPreferences({ userId }: { userId: number }) {
    const [preferences, setPreferences] = useState<Preference[]>([]);

    useEffect(() => {
        axios.get(`http://api.forix-isep.com/subjects/${userId}`)
            .then(response => setPreferences(response.data))
            .catch(error => console.error('Error fetching user preferences:', error));
    }, [userId]);

    return (
        <div className="flex justify-center space-x-4 mt-4">
            {preferences.map(preference => (
                <span key={preference.id} className="bg-gray-200 rounded-full px-4 py-2 text-sm">
                    {preference.name}
                </span>
            ))}
        </div>
    );
}

export default UserPreferences;
