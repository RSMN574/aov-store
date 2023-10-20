// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJoe970SoYbimabV0Lsa5ZXK8hlnV4ulI",
    authDomain: "aov-store.firebaseapp.com",
    projectId: "aov-store",
    storageBucket: "aov-store.appspot.com",
    messagingSenderId: "506990193656",
    appId: "1:506990193656:web:73fec7e4c4b05120e5840d",
    measurementId: "G-YWYT9WRV8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db,collection, getDocs}