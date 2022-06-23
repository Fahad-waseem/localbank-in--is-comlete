
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";


// import { getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASfgBmUPFpGGMaLmv16I-yk-xcozvnuHI",
  authDomain: "fahad-6127d.firebaseapp.com",
  projectId: "fahad-6127d",
  storageBucket: "fahad-6127d.appspot.com",
  messagingSenderId: "533305757720",
  appId: "1:533305757720:web:0523290aff9b6060c4b36d"
}
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }