// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAd9Fu8hoDZHHpO2a0W8C2iUYvdLE5cdzE',
  authDomain: 'jester-solomon.firebaseapp.com',
  projectId: 'jester-solomon',
  storageBucket: 'jester-solomon.appspot.com',
  messagingSenderId: '1087270972882',
  appId: '1:1087270972882:web:dcc18aee9554450a8cec0b',
  measurementId: 'G-7D2JJ489G9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
