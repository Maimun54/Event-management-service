// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmWOTqIcJuX30yCHvL1htrbOt4eXi4apk",
  authDomain: "event-management-auth-d91fd.firebaseapp.com",
  projectId: "event-management-auth-d91fd",
  storageBucket: "event-management-auth-d91fd.appspot.com",
  messagingSenderId: "215736409703",
  appId: "1:215736409703:web:3b229082e9481d60d27ec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app