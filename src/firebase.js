import firebase from'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAfQjnasYe7KIqg0mjvXmouMu1Aaak1OnM",
    authDomain: "comentaki-a2f09.firebaseapp.com",
    databaseURL: "https://comentaki-a2f09.firebaseio.com",
    projectId: "comentaki-a2f09",
    storageBucket: "",
    messagingSenderId: "578284851186",
    appId: "1:578284851186:web:7acb84240a81e4d303656b"
  };


  firebase.initializeApp(firebaseConfig)

  export default firebase