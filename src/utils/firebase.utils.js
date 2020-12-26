import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyB5bxT9pE40QZUVmkmdsUwYwG9UBv8xBKA",
  authDomain: "crwn-clothing-34533.firebaseapp.com",
  projectId: "crwn-clothing-34533",
  storageBucket: "crwn-clothing-34533.appspot.com",
  messagingSenderId: "709757477191",
  appId: "1:709757477191:web:662a21080263a6e09aac62",
  measurementId: "G-8KPLB75D40"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})
export const googleSignIn = () => (
  auth.signInWithPopup(provider)
    .catch(e => console.log(e))
)

export default firebase