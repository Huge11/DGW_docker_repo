// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");

const config = {
  apiKey: "AIzaSyCO1_zkzzxhxXR4cYLILgXhIKLb1-XrjJY",
  authDomain: "daily-guitar-workout.firebaseapp.com",
  databaseURL: "https://daily-guitar-workout.firebaseio.com",
  projectId: "daily-guitar-workout",
  storageBucket: "daily-guitar-workout.appspot.com",
  messagingSenderId: "746116739967",
  appId: "1:746116739967:web:c76ce6e0800c7febbfe04a",
  measurementId: "G-0E6LVS3111"
};




// // As httpOnly cookies are to be used, do not persist any state client side.
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

// // When the user signs in with email and password.
// firebase.auth().signInWithEmailAndPassword('user@example.com', 'password').then(user => {
//   // Get the user's ID token as it is needed to exchange for a session cookie.
//   return user.getIdToken().then(idToken = > {
//     // Session login endpoint is queried and the session cookie is set.
//     // CSRF protection should be taken into account.
//     // ...
//     const csrfToken = getCookie('csrfToken')
//     return postIdTokenToSessionLogin('/sessionLogin', idToken, csrfToken);
//   });
// }).then(() => {
//   // A page redirect would suffice as the persistence is set to NONE.
//   return firebase.auth().signOut();
// }).then(() => {
//   window.location.assign('/profile');
// });


