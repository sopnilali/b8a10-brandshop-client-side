// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8gdQnm6DbXJOpVt7X8KnjvINN0Bv9pSk",
  authDomain: "mobilemaya-bdf73.firebaseapp.com",
  projectId: "mobilemaya-bdf73",
  storageBucket: "mobilemaya-bdf73.appspot.com",
  messagingSenderId: "70839666025",
  appId: "1:70839666025:web:963ce67c842d815b79e9f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth