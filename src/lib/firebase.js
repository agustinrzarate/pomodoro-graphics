// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOEf1k10r1K2bpcCuQD9RtgO41ccR_bzg",
  authDomain: "pomodoro-graphics.firebaseapp.com",
  projectId: "pomodoro-graphics",
  storageBucket: "pomodoro-graphics.appspot.com",
  messagingSenderId: "292053086195",
  appId: "1:292053086195:web:4883dc54beeb71b4f2ac86",
  measurementId: "G-W2JZPNBGES",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export const signUp = ({email, password}) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
}

export const signIn = ({email, password}) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
}

export const authStateChanged = (onChange) => {
    return onAuthStateChanged(auth, (user) => {
        onChange(user);
    });
}