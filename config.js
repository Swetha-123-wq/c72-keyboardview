import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyD5s7tzQ1ricaG4OR2jeI1ayz-D3_Bbm_s",
  authDomain: "wily-app-8e104.firebaseapp.com",
  databaseURL: "https://wily-app-8e104.firebaseio.com",
  projectId: "wily-app-8e104",
  storageBucket: "wily-app-8e104.appspot.com",
  messagingSenderId: "11032635334",
  appId: "1:11032635334:web:b2c5950ff85bdd67d734c7"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
