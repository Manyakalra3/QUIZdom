import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyDKKLJxpJ6_q-IFGGnLizL3SLkS2Mbn5og",
    authDomain: "votingapp-22127.firebaseapp.com",
    projectId: "votingapp-22127",
    storageBucket: "votingapp-22127.appspot.com",
    messagingSenderId: "112968968381",
    appId: "1:112968968381:web:4600c3d308351807776fd4",
    measurementId: "G-WHKE35EFJ0"
};
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth()

export default firebase;