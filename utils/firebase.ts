import fb from 'firebase/app';
import * as fireorm from 'fireorm';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

let firebase: fb.app.App;

let firestore: fb.firestore.Firestore;

if (!fb.apps.length) {
  firebase = fb.initializeApp(firebaseConfig);
  firestore = firebase.firestore();
  fireorm.initialize(firestore);
} else {
  firebase = fb.app();
  firestore = firebase.firestore();
}

firestore.settings({});

export { firebase, firestore };
