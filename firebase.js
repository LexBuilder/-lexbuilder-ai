// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtXKC7jIQXrHGHal59vgrFcTqLP_bGgno",
  authDomain: "peticiona-98f54.firebaseapp.com",
  projectId: "peticiona-98f54",
  storageBucket: "peticiona-98f54.firebasestorage.app",
  messagingSenderId: "447738326561",
  appId: "1:447738326561:web:3878aff14a92eb35c13d60"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
