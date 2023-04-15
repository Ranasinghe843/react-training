// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // put your config here
  apiKey: "AIzaSyAhMijYIQJJe-nStZhr_w2L1wsN-yFt1wI",
  authDomain: "softwaresaturdays2023-82bdc.firebaseapp.com",
  databaseURL: "https://softwaresaturdays2023-82bdc-default-rtdb.firebaseio.com",
  projectId: "softwaresaturdays2023-82bdc",
  storageBucket: "softwaresaturdays2023-82bdc.appspot.com",
  messagingSenderId: "663767516822",
  appId: "1:663767516822:web:e8f1435469db13d4c564b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
