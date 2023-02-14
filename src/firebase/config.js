import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCby_j372quRmnB6GFJ2Vqtzscu8ip2Ikw",
    authDomain: "udemy-vue-firebase-sites-27f5b.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-27f5b",
    storageBucket: "udemy-vue-firebase-sites-27f5b.appspot.com",
    messagingSenderId: "386864416889",
    appId: "1:386864416889:web:fd29136488a40bf862aca8"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service 
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }