import React from 'react';
import { Link } from 'react-router-dom';
import { Home, LogIn, UserPlus, PenTool, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <Home className="mr-2" /> Blog App
        </Link>
        <div className="space-x-4">
          {user ? (
            <>
              <span className="mr-4">Welcome, {user.name}</span>
              <Link to="/create-post" className="flex items-center">
                <PenTool className="mr-1" /> Create Post
              </Link>
              <button onClick={logout} className="flex items-center">
                <LogOut className="mr-1" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="flex items-center">
                <LogIn className="mr-1" /> Login
              </Link>
              <Link to="/register" className="flex items-center">
                <UserPlus className="mr-1" /> Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;