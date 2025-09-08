import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'researcher' | 'citizen';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on app load
    const checkAuth = () => {
      const savedUser = localStorage.getItem('justiciapedia_user');
      const savedToken = localStorage.getItem('justiciapedia_token');
      
      if (savedUser && savedToken) {
        try {
          const userData = JSON.parse(savedUser);
          setUser(userData);
        } catch (error) {
          console.error('Error parsing saved user data:', error);
          localStorage.removeItem('justiciapedia_user');
          localStorage.removeItem('justiciapedia_token');
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulate API call - replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication - replace with real API
      const mockUsers = [
        {
          id: '1',
          email: 'admin@justiciapedia.org.gt',
          password: 'admin123',
          name: 'Administrador',
          role: 'admin' as const,
          avatar: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg'
        },
        {
          id: '2',
          email: 'investigador@justiciapedia.org.gt',
          password: 'investigador123',
          name: 'María González',
          role: 'researcher' as const,
          avatar: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg'
        },
        {
          id: '3',
          email: 'ciudadano@example.com',
          password: 'ciudadano123',
          name: 'Juan Pérez',
          role: 'citizen' as const,
          avatar: 'https://images.pexels.com/photos/8422230/pexels-photo-8422230.jpeg'
        }
      ];

      const foundUser = mockUsers.find(u => u.email === email && u.password === password);
      
      if (foundUser) {
        const { password: _, ...userWithoutPassword } = foundUser;
        const token = `mock_token_${foundUser.id}_${Date.now()}`;
        
        setUser(userWithoutPassword);
        localStorage.setItem('justiciapedia_user', JSON.stringify(userWithoutPassword));
        localStorage.setItem('justiciapedia_token', token);
        
        setIsLoading(false);
        return true;
      } else {
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('justiciapedia_user');
    localStorage.removeItem('justiciapedia_token');
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isLoading,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};