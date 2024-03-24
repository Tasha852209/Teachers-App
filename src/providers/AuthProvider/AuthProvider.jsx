import { createContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase/config';

export const AuthContext = createContext({ user: null });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const userSignIn = async (email, password, setVisible) => {
    setError(null);
    await signInWithEmailAndPassword(auth, email, password)
      .then(UserCredentialImpl => {
        console.log(UserCredentialImpl.user);
        setVisible(false);
      })
      .catch(err => {
        console.log(err.message);
        setError('Email or password is wrong!');
      });
  };

  const userSignUp = async (email, password, setVisible) => {
    setError(null);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(UserCredentialImpl => {
        console.log(UserCredentialImpl.user);
        setVisible(false);
      })
      .catch(err => {
        console.log(err.message);
        setError('Email in use!');
      });
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <AuthContext.Provider
      value={{ user, userSignIn, userSignUp, userSignOut, error, setError }}
    >
      {children}
    </AuthContext.Provider>
  );
};
