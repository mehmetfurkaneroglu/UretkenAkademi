import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdGHDO058uGGprL2S8bIAgdyyv0VplT1M",
  authDomain: "quizappesenler.firebaseapp.com",
  projectId: "quizappesenler",
  storageBucket: "quizappesenler.appspot.com",
  messagingSenderId: "1021906902162",
  appId: "1:1021906902162:web:f54aaa4e5482c6c7bcda4b"
};

initializeApp(firebaseConfig);

export const db = getFirestore()