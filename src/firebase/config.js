import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDedPUKXTXNHuu_rTs7Xx3bQfvy8MFPg9Q',
  authDomain: 'teachers-app-9f116.firebaseapp.com',
  projectId: 'teachers-app-9f116',
  storageBucket: 'teachers-app-9f116.appspot.com',
  messagingSenderId: '1038587790128',
  appId: '1:1038587790128:web:6f7f568dae4642602ffef5',
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
