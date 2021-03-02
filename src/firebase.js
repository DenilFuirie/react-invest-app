import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBW4DS5rRIo-ck0kKB7Taqbiq5yvBHPwfs",
    authDomain: "invest-app-296e8.firebaseapp.com",
    projectId: "invest-app-296e8",
    storageBucket: "invest-app-296e8.appspot.com",
    messagingSenderId: "1063562500241",
    appId: "1:1063562500241:web:47eadc24e86cc3712dc730"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };