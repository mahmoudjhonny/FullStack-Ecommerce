import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCkH5KgSAfqDCzfPazqJFSzntKx4Byd-zM",
//   authDomain: "e-commerce-c22ff.firebaseapp.com",
//   projectId: "e-commerce-c22ff",
//   storageBucket: "e-commerce-c22ff.appspot.com",
//   messagingSenderId: "528841537364",
//   appId: "1:528841537364:web:22cb6fc7ecda2200cabac1",
// };

const firebaseConfig = {
  apiKey: "AIzaSyD7LFo5DHqcoQi7PYxRvCwmlCtmxLT5ATk",
  authDomain: "e-commerce-feb0b.firebaseapp.com",
  projectId: "e-commerce-feb0b",
  storageBucket: "e-commerce-feb0b.appspot.com",
  messagingSenderId: "852524559919",
  appId: "1:852524559919:web:37a39594794bacd1d7a0da",
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select-account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
