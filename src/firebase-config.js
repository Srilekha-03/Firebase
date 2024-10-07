import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDqZqI281kdFF4BSSmpox3vIZ3nYDuOvHY",
    authDomain: "fir-tut-1c559.firebaseapp.com",
    projectId: "fir-tut-1c559",
    storageBucket: "fir-tut-1c559.appspot.com",
    messagingSenderId: "151195930",
    appId: "1:151195930:web:d09e0f9d86c70ebf761ca3",
    measurementId: "G-XDKMY7184M"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)