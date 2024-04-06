import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDCeZQ2zpDlDFUo_4BxRqx9lwPmgI2txpM',
  authDomain: 'teacher-app-8e273.firebaseapp.com',
  databaseURL:
    'https://teacher-app-8e273-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'teacher-app-8e273',
  storageBucket: 'teacher-app-8e273.appspot.com',
  messagingSenderId: '209301642079',
  appId: '1:209301642079:web:3362d1e88ce2b17695b4ea',
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
