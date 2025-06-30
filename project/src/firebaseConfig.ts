import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiHw6261fF3keUzNgTcyw2ozmzemtODTg",
  authDomain: "hlakanipho-foundation.firebaseapp.com",
  projectId: "hlakanipho-foundation",
  storageBucket: "hlakanipho-foundation.firebasestorage.app",
  messagingSenderId: "674337518163",
  appId: "1:674337518163:web:9d641c61da46824f8c0ca6",
  measurementId: "G-6JSDFVSSLW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

/* service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
} */
