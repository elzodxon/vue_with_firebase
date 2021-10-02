import firebase from 'firebase/compat';

const firebaseConfig = {
  apiKey: 'AIzaSyDi-t-ohaiPb33Io6YpzVxw4CjLqQVQfcQ',
  authDomain: 'admin-crm-6c81e.firebaseapp.com',
  projectId: 'admin-crm-6c81e',
  storageBucket: 'admin-crm-6c81e.appspot.com',
  messagingSenderId: '827624911698',
  appId: '1:827624911698:web:e48e15e8e89b644aa2808b',
  measurementId: 'G-ZYDNRGXNBD',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const analytics = firebase.getAnalytics(app);

export default firebaseApp.firestore();
