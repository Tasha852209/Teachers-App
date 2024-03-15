import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({ user: null });

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ uid: '', username: '' });

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const { user } = JSON.parse(currentUser);
      setIsLoggedIn(true);
      setUser(user);
    }
    setLoading(false);
  }, []);

  function logIn(user) {
    setIsLoggedIn(true);
    setUser(user);
    localStorage.setItem(
      'currentUser',
      JSON.stringify({ user, isLoggedIn: true })
    );
  }

  function logOut() {
    setIsLoggedIn(false);
    setUser({ uid: '', username: '' });
    localStorage.removeItem('currentUser');
  }

  if (loading) {
    return null;
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
