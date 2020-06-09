import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB0Ix9ml_BOcKtVqX1MuKUzzdKYMAj5q5M",
    authDomain: "examen3-8da50.firebaseapp.com",
    databaseURL: "https://examen3-8da50.firebaseio.com",
    projectId: "examen3-8da50",
    storageBucket: "examen3-8da50.appspot.com",
    messagingSenderId: "842367011349",
    appId: "1:842367011349:web:8f05b1d1355855ab659c1c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}