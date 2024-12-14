


import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANUUH-eDr4hNeGHxuoIB8zQfHlxQtgt8g",
    authDomain: "tweet-5c116.firebaseapp.com",
    projectId: "tweet-5c116",
    storageBucket: "tweet-5c116.firebasestorage.app",
    messagingSenderId: "405966619618",
    appId: "1:405966619618:web:0a95c2572ba0a726c92fbb",
    measurementId: "G-04T1NPGNN9"
  };


  const firebaseApp = initializeApp(firebaseConfig);
  const db = getDatabase(firebaseApp);
  export default db;
  
  






  