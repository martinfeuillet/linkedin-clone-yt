import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAZwcZMEObhkhQJ3czc00_6XRlxvFKCnVc",
    authDomain: "linkedin-clone-d59ac.firebaseapp.com",
    projectId: "linkedin-clone-d59ac",
    storageBucket: "linkedin-clone-d59ac.appspot.com",
    messagingSenderId: "954659968900",
    appId: "1:954659968900:web:a1746080c3031f9ef5efd1"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth();
