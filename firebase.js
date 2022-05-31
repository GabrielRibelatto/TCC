// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK2xo-SGOOsLAE6gNMYCaZmwZ71exPO1s",
  authDomain: "app-tcc-426e2.firebaseapp.com",
  projectId: "app-tcc-426e2",
  storageBucket: "app-tcc-426e2.appspot.com",
  messagingSenderId: "784071297433",
  appId: "1:784071297433:web:dabb982b8d768ce53eab08"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app()
}

const auth = firebase.auth()

