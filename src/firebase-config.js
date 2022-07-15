import { initializeApp } from "firebase/app";
import { getFirestore, } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCYX_mlUugEZ4SqeCqNHAC9AhHIL0XJOmQ",
    authDomain: "localizahc-test.firebaseapp.com",
    databaseURL: "https://localizahc-test-default-rtdb.firebaseio.com",
    projectId: "localizahc-test",
    storageBucket: "localizahc-test.appspot.com",
    messagingSenderId: "97613496166",
    appId: "1:97613496166:web:09d513e0ba4233420812a7"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
