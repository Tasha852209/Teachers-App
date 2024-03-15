import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDCeZQ2zpDlDFUo_4BxRqx9lwPmgI2txpM',
  authDomain: 'teacher-app-8e273.firebaseapp.com',
  projectId: 'teacher-app-8e273',
  storageBucket: 'teacher-app-8e273.appspot.com',
  messagingSenderId: '209301642079',
  appId: '1:209301642079:web:0ae678c5ff541b3b95b4ea',
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
