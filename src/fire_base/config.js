import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyD5AJ0tcibKhRfBXltuhQck-DxKMrbGDNo',
  authDomain: 'lingo-app-71454.firebaseapp.com',
  databaseURL:
    'https://lingo-app-71454-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'lingo-app-71454',
  storageBucket: 'lingo-app-71454.appspot.com',
  messagingSenderId: '609561006227',
  appId: '1:609561006227:web:8b1d910e2f7967c60b3d66',
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
