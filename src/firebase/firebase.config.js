// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };
const firebaseConfig = {
  apiKey: "AIzaSyAx7vJliUNnwE3N4juFAPwLnWDF6M0e0K0",
  authDomain: "camp-wise-6d6e9.firebaseapp.com",
  projectId: "camp-wise-6d6e9",
  storageBucket: "camp-wise-6d6e9.appspot.com",
  messagingSenderId: "707659724352",
  appId: "1:707659724352:web:89503f94e6d94d2a0d91a5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;