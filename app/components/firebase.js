import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage, ref as storageRef, uploadBytes } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyA1Hsi7HQcILDDPX3AcwrzAlUsEsOA3LUI",

  authDomain: "users-11308.firebaseapp.com",

  projectId: "users-11308",

  storageBucket: "users-11308.appspot.com",

  messagingSenderId: "673243422823",

  appId: "1:673243422823:web:c127fdff9607b32a49b4c2",

  measurementId: "G-JT3J8YQHXL"

};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 
  const storage = getStorage(app);

export { db, auth, storage }; // Exporta el objeto auth