// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDv_POR6X1YwJ-4j2P3Zao5czGdT_7y4SE',
  authDomain: 'noteapp-a5a64.firebaseapp.com',
  projectId: 'noteapp-a5a64',
  storageBucket: 'noteapp-a5a64.appspot.com',
  messagingSenderId: '507669105454',
  appId: '1:507669105454:web:33b491dece841c2780c8bf'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }