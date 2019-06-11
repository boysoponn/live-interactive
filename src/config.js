import  firebase from 'firebase';

    var configfirebase = {
    apiKey: "AIzaSyA1JShIbYoFwoKXBLyO_Twc7RV7oeSxGgM",
    authDomain: "live-interractive.firebaseapp.com",
    databaseURL: "https://live-interractive.firebaseio.com",
    projectId: "live-interractive",
    storageBucket: "live-interractive.appspot.com",
    messagingSenderId: "249837120125",
    appId: "1:249837120125:web:d7c7b3663d039d82"
  };
  const config =firebase.initializeApp(configfirebase);
  export default config;
