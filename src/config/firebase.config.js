import firebase from 'firebase';

const firebaseConfig =  {
    apiKey: "AIzaSyCKpjgA9bBmvJUACgPHwEP1IBlnX83Wl_Y",
    authDomain: "gifter-store.firebaseapp.com",
    databaseURL: "https://gifter-store.firebaseio.com",
    projectId: "gifter-store",
    storageBucket: "gifter-store.appspot.com",
    messagingSenderId: "28541210576",
    appId: "1:28541210576:web:be5a9d6b109b549a8c73d5",
    measurementId: "G-G5CN1HS3C9"
  };
  
  export default firebase.initializeApp(firebaseConfig);