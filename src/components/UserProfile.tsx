
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, LogOut, Home } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import MyProperties from './MyProperties';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const [showMyProperties, setShowMyProperties] = useState(false);

  if (!isOpen || !user) return null;

  const handleLogout = () => {
    logout();
    onClose();
  };

  const handleMyPropertiesClick = () => {
    setShowMyProperties(true);
  };

  const handleBackToProfile = () => {
    setShowMyProperties(false);
  };

  if (showMyProperties) {
    return (
      <MyProperties 
        isOpen={true} 
        onClose={onClose} 
        onBack={handleBackToProfile}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            User Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div>
              <label className="text-sm font-medium text-gray-600">Name</label>
              <p className="text-lg">{user.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <p className="text-lg">{user.email}</p>
            </div>
            {user.phone && (
              <div>
                <label className="text-sm font-medium text-gray-600">Phone</label>
                <p className="text-lg">{user.phone}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 pt-4">
            <Button variant="outline" className="w-full justify-start" onClick={handleMyPropertiesClick}>
              <Home className="h-4 w-4 mr-2" />
              My Properties
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start text-red-600 hover:text-red-700"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>

          <Button variant="ghost" onClick={onClose} className="w-full mt-4">
            Close
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
