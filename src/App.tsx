import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './Views/Login';
import RegisterPage from './Views/Register';
import LostPasswordPage from './Views/LostPassword';
import PostCreation from './Views/PostCreation';
import Header from './components/Header';
import AccountSettings from './Views/AccountSettings';
import Homepage from './Views/Homepage';
import Explore from './Views/Explore';
import UserProfile from './Views/UserProfile';
import Preferences from './Views/Preferences';

function App() {
  return (
    <body id="top" className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/passwordLost" element={<LostPasswordPage />} />
            <Route path="/postCreation" element={<PostCreation />} />
            <Route path="/accountSettings" element={<AccountSettings />} />
            <Route path="/user/:userId" element={<UserProfile />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes></BrowserRouter>
      </main>
    </body>

  );
}

export default App;
