import { firebase } from '@firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyDDCvqlFnV1ntGZl0OUJ8NrI3IQPzJ-Dj4",
    authDomain: "restauro-b8377.firebaseapp.com",
    projectId: "restauro-b8377",
    storageBucket: "restauro-b8377.appspot.com",
    messagingSenderId: "365355681819",
    appId: "1:365355681819:web:819cfd1a8a9883be0f90be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;