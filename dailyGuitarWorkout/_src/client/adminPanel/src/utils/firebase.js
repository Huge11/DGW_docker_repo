import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'

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


firebase.initializeApp(config)

// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const registerWithEmailAndPassword = (email,password)=>firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  // var errorCode = error.code;
  // var errorMessage = error.message;
  // ...
  console.log(error)
});

export const signInWithEmailAndPassword = (email,password)=>firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(()=>{return firebase.auth().signInWithEmailAndPassword(email, password)}).catch(function(error) {
  // Handle Errors here.
  // var errorCode = error.code;
  // var errorMessage = error.message;
  // ...
  console.log(error)
});

export default firebase




//   export const createUserProfileDocument = async (userAuth, additionalData)=>{
//     if(!userAuth){
//       return
//     }

//     const userRef = firestore.doc(`users/${userAuth.uid}`)

//     const snapShot = await userRef.get()

//     if(!snapShot.exists){
//       const { displayName, email } = userAuth;
//       const createdAt = new Date();

//       try{
//         await userRef.set({
//           displayName,
//           email,
//           createdAt,
//           ...additionalData
//         })
//       } catch (err){
//         console.log('error creating user', err.message)
//       }
//     }
//     return userRef
//   }


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  const fbProvider = new firebase.auth.FacebookAuthProvider();
  fbProvider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithFacebook = ()=> auth.signInWithPopup(fbProvider);

