import { firebase } from '@firebase/app';

import Vars from '../../vars.js'


var firebaseConfig = {
    // apiKey: "AIzaSyDDCvqlFnV1ntGZl0OUJ8NrI3IQPzJ-Dj4",
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY || Vars.FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN || Vars.FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || Vars.FIREBASE_PROJECT_ID,
    storageBucket: "restauro-b8377.appspot.com",
    messagingSenderId: "365355681819",
    appId: process.env.REACT_APP_FIREBASE_APP_ID || Vars.FIREBASE_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;