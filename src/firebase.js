// Config file
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAfOULlhWiRyXo0OJ5Bpm7GwGcsli3cNyM",
    authDomain: "manager-2d089.firebaseapp.com",
    databaseURL: "https://manager-2d089.firebaseio.com",
    projectId: "manager-2d089",
    storageBucket: "manager-2d089.appspot.com",
    messagingSenderId: "568067450040"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();