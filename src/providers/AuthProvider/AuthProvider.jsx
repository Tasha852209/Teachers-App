import { createContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth, database } from '../../fire_base/config';
import { createUser, getUser } from '../../fire_base/users';
import { onValue, ref } from 'firebase/database';

export const AuthContext = createContext({ user: null });

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        const { uid, email } = user;
        try {
          const dbUser = await getUser(uid);

          if (!dbUser) {
            await createUser(uid, {
              email,
              roles: ['start'],
              favorites: [],
            });
            setUserId(uid);
            return;
          }

          setUserId(uid);
        } catch (error) {
          console.log(error.message);
        } finally {
          setIsRefreshing(false);
        }
      } else {
        setIsRefreshing(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!userId) return;
    const unsubscribe = onValue(ref(database, `/users/${userId}`), snapshot => {
      const data = snapshot.val();
      setUser({ id: userId, ...data });
    });

    return () => {
      unsubscribe();
    };
  }, [userId]);

  const userSignIn = async (email, password, setVisible) => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setVisible(false);
      // Після успішного входу оновлюємо стан користувача
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
      }
    } catch (error) {
      console.log(error.message);
      setError('Email or password is wrong!');
    }
  };

  const userSignUp = async (email, password, setVisible) => {
    setError(null);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(UserCredentialImpl => {
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
      {isRefreshing ? <div>...is loading</div> : children}
    </AuthContext.Provider>
  );
};
