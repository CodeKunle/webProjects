// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional





// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIuXLqHjV5D0gltgU9OPpc9TEKmV7WO7s",
    authDomain: "clonedtwitter-3b693.firebaseapp.com",
    databaseURL: "https://clonedtwitter-3b693-default-rtdb.firebaseio.com",
    projectId: "clonedtwitter-3b693",
    storageBucket: "clonedtwitter-3b693.firebasestorage.app",
    messagingSenderId: "1084496719303",
    appId: "1:1084496719303:web:8171194854897f34a47de2",
    measurementId: "G-NVC1SWJKCC"
  };



  const firebaseApp = initializeApp(firebaseConfig);

  const db = getDatabase(firebaseApp);
  
  export default db;