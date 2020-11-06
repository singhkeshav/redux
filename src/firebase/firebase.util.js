import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyABcEa0DiDZMdifsSE4Hgr-h7YGLRvliXY",
    authDomain: "system-test-77aa9.firebaseapp.com",
    databaseURL: "https://system-test-77aa9.firebaseio.com",
    projectId: "system-test-77aa9",
    storageBucket: "system-test-77aa9.appspot.com",
    messagingSenderId: "223204323729",
    appId: "1:223204323729:web:bdcd88aaf56b15d7f8aa30"
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


   export const auth = firebase.auth();
   export const firestore = firebase.firestore();
   export const createUserProfileDocument = async (userAuth,additinalData) =>{
    if(!userAuth) return ;
      
      const userRef = firestore.doc(`users/${userAuth.uid}`)
      const snapShot = await userRef.get();
      if(!snapShot.exists){
        const { displayName,email,photoURL}  = userAuth;
        const createAt = new Date();
        try{
             await userRef.set({
              displayName,
              email,
              photoURL,
              createAt,
              ...additinalData
             });
            
        } catch(ex){
          console.error(ex.message)
        }
      } 
      return userRef;
   }
   const provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({prompt: 'select_account'});
   export const signInWithGoogle = () => auth.signInWithPopup(provider);

   export default firebase;