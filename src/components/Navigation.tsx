
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "./AuthModal";
import UserProfile from "./UserProfile";

const Navigation: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-teal-500 border-b-2 border-teal-500" : "text-gray-700";
  };

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };
  
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 z-10 flex justify-between items-center">
        <div className="text-2xl font-bold text-teal-500">
          Pondy
        </div>
        
        <ul className="flex flex-wrap space-x-4 md:space-x-6 items-center">
          <li>
            <Link to="/" className={`${isActive('/')} hover:text-teal-500 transition-colors font-medium pb-1`}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={`${isActive('/about')} hover:text-teal-500 transition-colors font-medium pb-1`}>About Us</Link>
          </li>
          <li>
            <Link to="/contact" className={`${isActive('/contact')} hover:text-teal-500 transition-colors font-medium pb-1`}>Contact</Link>
          </li>
          
          {user ? (
            <li>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowUserProfile(true)}
                className="flex items-center gap-2 text-gray-700 hover:text-teal-500"
              >
                <User className="h-4 w-4" />
                {user.name}
              </Button>
            </li>
          ) : (
            <>
              <li>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleAuthClick('login')}
                  className="text-gray-700 hover:text-teal-500"
                >
                  Sign In
                </Button>
              </li>
              <li>
                <Button
                  size="sm"
                  onClick={() => handleAuthClick('register')}
                  className="bg-teal-500 hover:bg-teal-600 text-white"
                >
                  Sign Up
                </Button>
              </li>
            </>
          )}
        </ul>
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
      />

      <UserProfile
        isOpen={showUserProfile}
        onClose={() => setShowUserProfile(false)}
      />
    </>
  );
};

export default Navigation;
