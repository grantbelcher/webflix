import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// we need to seed DB

// we need a config for DB here

const config = {
  apiKey: "AIzaSyAb0q_M0k_3iZ9cbPI2DVFKvo3gZcrcmTk",
  authDomain: "webflix-1f4b8.firebaseapp.com",
  projectId: "webflix-1f4b8",
  storageBucket: "webflix-1f4b8.appspot.com",
  messagingSenderId: "219074600576",
  appId: "1:219074600576:web:c9cc94d6f6e2ef3a5b1065",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
