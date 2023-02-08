// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import {
    getAuth
} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCA8bOx5FD-s7xZVeN0UmFKFzLZ9LMxwgc",
    authDomain: "clone-1f754.firebaseapp.com",
    projectId: "clone-1f754",
    storageBucket: "clone-1f754.appspot.com",
    messagingSenderId: "204538071317",
    appId: "1:204538071317:web:4c7ef234fd7365a92cc11c",
    measurementId: "G-R6Z65PR59Q"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export {db , auth};
