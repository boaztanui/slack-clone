import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBffEw8jn9e_vl54hGpcFiYhnIDahPFpeY",
    authDomain: "slack-clone-992e5.firebaseapp.com",
    projectId: "slack-clone-992e5",
    storageBucket: "slack-clone-992e5.appspot.com",
    messagingSenderId: "767978440189",
    appId: "1:767978440189:web:abb4ab7750b2b6e9af0594"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db};