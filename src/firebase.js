// Config file
import * as firebase from "firebase";

const config = {

};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();