import dotenv from 'dotenv';
dotenv.config();


import { initializeApp } from 'firebase/app';   
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuHjyqsFCjIxJV70iK8pn4-SGgbnDCVzw",
  authDomain: "proyecto-trabajo-final-9bd6d.firebaseapp.com",
  projectId: "proyecto-trabajo-final-9bd6d",
  storageBucket: "proyecto-trabajo-final-9bd6d.firebasestorage.app",
  messagingSenderId: "512640368445",
  appId: "1:512640368445:web:33aaa7802dbdd8417bcf54"
};

const app = initializeApp(firebaseConfig);
const db =getFirestore(app);

export {db}