import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCF2gNzA0-I5QONKmMqTTOmdnH03SLyMNQ",
  authDomain: "music-app-5dabf.firebaseapp.com",
  projectId: "music-app-5dabf",
  storageBucket: "music-app-5dabf.firebasestorage.app",
  appId: "1:1052131785558:web:6f1e3fe953ac4e0d6af4f7"
}

export default firebase.initializeApp(firebaseConfig)