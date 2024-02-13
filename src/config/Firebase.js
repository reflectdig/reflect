import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDrNDJBgI6BTQlnt9xxZzIWXLvIOXeDBnc",
  authDomain: "reflect-6315a.firebaseapp.com",
  projectId: "reflect-6315a",
  storageBucket: "reflect-6315a.appspot.com",
  messagingSenderId: "170172540537",
  appId: "1:170172540537:web:686cacb1746b42607696a8",
  measurementId: "G-3LQQN81LJN"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const storageRef = ref(storage, 'images');

export { app, db, storage, storageRef, ref, getDownloadURL, uploadBytes };
