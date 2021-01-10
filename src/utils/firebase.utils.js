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

export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData
      })
    } catch (err) {
      console.log('Error creating user', err.message)
    }
  }
  return userRef
}

export const addCollectionAndDocuments = async (collectionkey, objToAdd) => {
  const collectionRef = firestore.collection(collectionkey)

  const batch = firestore.batch()
  objToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })
  return await batch.commit()
}

export const convertCollectionSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((accum, collection) => {
    accum[collection.title.toLowerCase()] = collection
    return accum
  }, {})
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