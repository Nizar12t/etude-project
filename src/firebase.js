// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA3XuAXMkFt1Dm10YpOGFrA_dYLeunJFtg",
  authDomain: "e-learning-project-a58ee.firebaseapp.com",
  projectId: "e-learning-project-a58ee",
  storageBucket: "e-learning-project-a58ee.appspot.com",
  messagingSenderId: "933749265716",
  appId: "1:933749265716:web:12e53116b79e53bd138161",
  measurementId: "G-XCWZY5Z44F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db=getFirestore(app)

export const storage = getStorage(app);
// export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
