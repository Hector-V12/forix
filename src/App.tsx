import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './Views/Homepage';
import Explore from './Views/Explore';
import LoginPage from './Views/Login';
import RegisterPage from './Views/Register';
import LostPasswordPage from './Views/LostPassword';
import PostCreation from './Views/PostCreation';
import AccountSettings from './Views/AccountSettings';
import UserProfile from './Views/UserProfile';
import Preferences from './Views/Preferences';
import ProtectedLayout from './components/ProtectedLayout';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/passwordLost" element={<LostPasswordPage />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<ProtectedLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/postCreation" element={<PostCreation />} />
              <Route path="/accountSettings" element={<AccountSettings />} />
              <Route path="/user/:userId" element={<UserProfile />} />
              <Route path="/preferences" element={<Preferences />} />
            </Route>
          </Route>

          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
