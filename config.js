import firebase from "firebase";
require("@firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyCt53fmVq9LEA7IsaNO8iymPudQBMMLoWE",
  authDomain: "project77-bcc54.firebaseapp.com",
  projectId: "project77-bcc54",
  storageBucket: "project77-bcc54.appspot.com",
  messagingSenderId: "293815616411",
  appId: "1:293815616411:web:479a344788b1f288a1573e",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
