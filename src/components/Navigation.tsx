
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "./AuthModal";
import UserProfile from "./UserProfile";
import LanguageToggle from "./LanguageToggle";

const Navigation: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-teal-500 border-b-2 border-teal-500" : "text-gray-700";
  };

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setShowAuthModal(true);
    setIsMobileMenuOpen(false);
  };
  
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-teal-500">
              Pondy
            </div>
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
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
                  className="flex items-center gap-2 text-gray-700 hover:text-teal-500 min-h-[44px]"
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
                    className="text-gray-700 hover:text-teal-500 min-h-[44px]"
                  >
                    Sign In
                  </Button>
                </li>
                <li>
                  <Button
                    size="sm"
                    onClick={() => handleAuthClick('register')}
                    className="bg-teal-500 hover:bg-teal-600 text-white min-h-[44px]"
                  >
                    Sign Up
                  </Button>
                </li>
              </>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden min-h-[44px] min-w-[44px]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex justify-center py-4 border-b border-gray-200">
              <LanguageToggle />
            </div>
            <ul className="flex flex-col space-y-4 pt-4">
              <li>
                <Link 
                  to="/" 
                  className={`${isActive('/')} hover:text-teal-500 transition-colors font-medium text-lg block py-3`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`${isActive('/about')} hover:text-teal-500 transition-colors font-medium text-lg block py-3`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`${isActive('/contact')} hover:text-teal-500 transition-colors font-medium text-lg block py-3`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              
              {user ? (
                <li>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setShowUserProfile(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 text-gray-700 hover:text-teal-500 w-full justify-start text-lg py-4 min-h-[48px]"
                  >
                    <User className="h-5 w-5" />
                    {user.name}
                  </Button>
                </li>
              ) : (
                <li className="flex flex-col space-y-3 pt-2">
                  <Button
                    variant="outline"
                    onClick={() => handleAuthClick('login')}
                    className="w-full text-gray-700 hover:text-teal-500 text-lg py-4 min-h-[48px]"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => handleAuthClick('register')}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white text-lg py-4 min-h-[48px]"
                  >
                    Sign Up
                  </Button>
                </li>
              )}
            </ul>
          </div>
        )}
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
