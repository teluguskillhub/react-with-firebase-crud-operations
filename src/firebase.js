import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCNw3VPEVKiOG1U-oed8R6xsJzNsc5EybA",
    authDomain: "test-3b630.firebaseapp.com",
    databaseURL: "https://test-3b630-default-rtdb.firebaseio.com",
    projectId: "test-3b630",
    storageBucket: "test-3b630.appspot.com",
    messagingSenderId: "984050276871",
    appId: "1:984050276871:web:ea9ed43fea6e30053f28a2"
  };
  
  // Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);
export default firebaseDB.database().ref();