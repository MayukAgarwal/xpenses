import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.XPENSES_API_KEY,
  authDomain: process.env.XPENSES_AUTH_DOMAIN,
  projectId: process.env.XPENSES_PROJECT_ID,
  storageBucket: process.env.XPENSES_STORAGE_BUCKET,
  messagingSenderId: process.env.XPENSES_MESSAGING_SENDER_ID,
  appId: process.env.XPENSES_APP_ID,
  measurementId: process.env.XPENSES_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default getFirestore(app)