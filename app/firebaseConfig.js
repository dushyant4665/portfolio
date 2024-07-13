
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDENdk__X29PXFzXU_ttpAXAISxMKcFn2U",
  authDomain: "portfoliocontact-ace4f.firebaseapp.com",
  projectId: "portfoliocontact-ace4f",
  storageBucket: "portfoliocontact-ace4f.appspot.com",
  messagingSenderId: "729689512177",
  appId: "1:729689512177:web:efec4bac0cc81f58a3f150",
  measurementId: "G-FVQWFQD47X",
  databaseURL:''
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 export{db};