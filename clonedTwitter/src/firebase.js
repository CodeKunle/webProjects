// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyAIuXLqHjV5D0gltgU9OPpc9TEKmV7WO7s",
    authDomain: "clonedtwitter-3b693.firebaseapp.com",
    databaseURL: "https://clonedtwitter-3b693-default-rtdb.firebaseio.com",
    projectId: "clonedtwitter-3b693",
    storageBucket: "clonedtwitter-3b693.firebasestorage.app",
    messagingSenderId: "1084496719303",
    appId: "1:1084496719303:web:329e13a1ad1d596ba47de2",
    measurementId: "G-60MFJNW7EG"
  };


  const firebaseApp = initializeApp(firebaseConfig);

  const db = getDatabase(firebaseApp);
  
  export default db;