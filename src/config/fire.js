import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBcrOlAbatfw96VeWrcQ3zHcVoGBIO4vyY",
    authDomain: "hwsaver-b14b0.firebaseapp.com",
    databaseURL: "https://hwsaver-b14b0.firebaseio.com",
    projectId: "hwsaver-b14b0",
    storageBucket: "hwsaver-b14b0.appspot.com",
    messagingSenderId: "783150961311",
    appId: "1:783150961311:web:c555c02de5df93a26ac8aa",
    measurementId: "G-ZNCV619D5F"
};
var fire=firebase.initializeApp(firebaseConfig);
export default fire;