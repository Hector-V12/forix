import React from 'react';

function Preferences() {
    const categories = [
        { name: 'Auto', description: "It's everything about cars, trucks, whether for incredible races or technological feats" },
        { name: 'Music', description: "It's everything about music, concerts, instruments, and musical genres" },
        { name: 'Sport', description: "It's everything about sports, competitions, athletes, and sporting events" },
        { name: 'DIY', description: "It's everything about do-it-yourself, hammers, all kinds of tools, wood, and materials that can be shaped" },
        { name: 'Cinema', description: "It's everything about cinema, movies, directors, actors, and film festivals" },
        { name: 'History', description: "It's everything about history, historical events, iconic figures, and significant eras" },
        { name: 'Books', description: "It's everything about books, literary genres, authors, and literary criticism" },
        { name: 'Tech', description: "It's everything about technology, gadgets, innovations, and tech trends" },
        { name: 'Art', description: "It's everything about art, paintings, sculptures, artists, and exhibitions" },
        { name: 'Nature', description: "It's everything about nature, animals, plants, and ecosystems" },
        { name: 'Games', description: "It's everything about games, video games, board games, and gaming competitions" },
        { name: 'Geography', description: "It's everything about geography, continents, countries, cultures, and landscapes" },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-8 text-center">Choisis tes préférences :</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div key={category.name} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold">{category.name}</h2>
                            </div>
                            <p className="text-gray-700 mb-4">{category.description}</p>
                            <div className="flex items-center">
                                <input type="checkbox" id={`interest-${category.name}`} className="mr-2" />
                                <label htmlFor={`interest-${category.name}`} className="text-sm">Activer mon intérêt</label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Preferences;
