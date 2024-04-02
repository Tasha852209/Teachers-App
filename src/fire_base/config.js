import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBiht0EHSpJNzh59vZysLbiuMJMn-eS2lw',
  authDomain: 'teachers-8730f.firebaseapp.com',
  databaseURL:
    'https://teachers-8730f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'teachers-8730f',
  storageBucket: 'teachers-8730f.appspot.com',
  messagingSenderId: '651790130371',
  appId: '1:651790130371:web:55c05ff6dcee9828659676',
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
