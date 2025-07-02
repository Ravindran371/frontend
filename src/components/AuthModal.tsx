
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import CountrySelector from './CountrySelector';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode }) => {
  const [currentMode, setCurrentMode] = useState(mode);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    countryCode: ''
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);

    // Validation for register mode
    if (currentMode === 'register') {
      const newErrors = [];
      if (!formData.country) {
        newErrors.push('Please select a country');
      }
      if (!formData.phone.trim()) {
        newErrors.push('Phone number is required');
      }
      if (newErrors.length > 0) {
        setErrors(newErrors);
        setLoading(false);
        return;
      }
    }

    try {
      let success = false;
      if (currentMode === 'login') {
        success = await login(formData.email, formData.password);
      } else {
        success = await register(formData.name, formData.email, formData.password, formData.phone);
      }

      if (success) {
        onClose();
        setFormData({ name: '', email: '', password: '', phone: '', country: '', countryCode: '' });
      } else {
        setErrors(['Invalid credentials or user already exists']);
      }
    } catch (error) {
      setErrors(['An error occurred. Please try again.']);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors([]);
  };

  const handleCountryChange = (country: any) => {
    setFormData(prev => ({ 
      ...prev, 
      country: country.code,
      countryCode: country.dialCode
    }));
    setErrors([]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>
            {currentMode === 'login' ? 'Sign In' : 'Sign Up'}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <ul className="text-red-600 text-sm">
                {errors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {currentMode === 'register' && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <CountrySelector
                    value={formData.country}
                    onChange={handleCountryChange}
                    placeholder="Select your country"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <div className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md text-sm text-gray-600">
                      {formData.countryCode || '+1'}
                    </div>
                    <Input
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      className="rounded-l-none"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                required
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <Input
                required
                type="password"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-teal-500 hover:bg-teal-600"
              disabled={loading}
            >
              {loading ? 'Please wait...' : (currentMode === 'login' ? 'Sign In' : 'Sign Up')}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <Button
              variant="link"
              onClick={() => setCurrentMode(currentMode === 'login' ? 'register' : 'login')}
              className="text-teal-600"
            >
              {currentMode === 'login' 
                ? "Don't have an account? Sign up" 
                : 'Already have an account? Sign in'
              }
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthModal;
