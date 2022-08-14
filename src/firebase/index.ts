import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJaM03ZUN02EQVYZrBZCHAEdPlylopNlI",
  authDomain: "insurance-blockchain.firebaseapp.com",
  projectId: "insurance-blockchain",
  storageBucket: "insurance-blockchain.appspot.com",
  messagingSenderId: "1049505916469",
  appId: "1:1049505916469:web:36b8c2400e652f6ce5b37c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
