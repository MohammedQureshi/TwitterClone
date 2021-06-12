import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxjAUuOaa5dxxwm05EkcIdLhBqD-5zTR8",
    authDomain: "twitterclone-ae64b.firebaseapp.com",
    projectId: "twitterclone-ae64b",
    storageBucket: "twitterclone-ae64b.appspot.com",
    messagingSenderId: "165927192521",
    appId: "1:165927192521:web:60191f356b33e427cc4a18",
    measurementId: "G-7EJ8QEGYV5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;