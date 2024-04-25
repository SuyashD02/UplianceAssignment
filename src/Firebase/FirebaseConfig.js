import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyB2IzU7T_5Wj1EGBcCIh03zQYlM9EzKFfQ",
  authDomain: "upliancelogin.firebaseapp.com",
  projectId: "upliancelogin",
  storageBucket: "upliancelogin.appspot.com",
  messagingSenderId: "555151243022",
  appId: "1:555151243022:web:cdc3e1f54d2f8d7c95c95f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};