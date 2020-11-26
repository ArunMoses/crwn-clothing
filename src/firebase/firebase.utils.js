import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA1-bl9UyVumgzaLUHT590neAVkVfTTQKQ",
    authDomain: "crwn-db-dbdb9.firebaseapp.com",
    databaseURL: "https://crwn-db-dbdb9.firebaseio.com",
    projectId: "crwn-db-dbdb9",
    storageBucket: "crwn-db-dbdb9.appspot.com",
    messagingSenderId: "1028841945067",
    appId: "1:1028841945067:web:cf49c4b6ab183ed38d8bae",
    measurementId: "G-8C71X54RQ7"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()
  if(!snapshot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try { 
    userRef.set({
      displayName, 
      email,
      createdAt,
      ...additionalData
    })
    } catch (error) {
      console.log('Error creating user: ', error.message)
    }
  }
return userRef
}  

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;