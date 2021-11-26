// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7p1JHRgwcebZex8FCBnzJqbw_fA2_T2M",
  authDomain: "tinder-6786c.firebaseapp.com",
  projectId: "tinder-6786c",
  storageBucket: "tinder-6786c.appspot.com",
  messagingSenderId: "740557954988",
  appId: "1:740557954988:web:1576e94137048de7d86409"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth()
let db = getFirestore()

export {auth, db}
