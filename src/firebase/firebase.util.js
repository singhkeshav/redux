import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "*********-h7YGLRvliXY",
    authDomain: "**********.firebaseapp.com",
    databaseURL: "https://system-test-77aa9.firebaseio.com",
    projectId: "*****-77aa9",
    storageBucket: "*******.appspot.com",
    messagingSenderId: "*****",
    appId: "*****cd88aaf56b15d7f8aa30"
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