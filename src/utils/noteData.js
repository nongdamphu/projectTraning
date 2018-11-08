import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

let config = {
    apiKey: "AIzaSyAQHeDTUOs7dEihRY740DY5mb87DmkqXs4",
    authDomain: "tranning-todo.firebaseapp.com",
    databaseURL: "https://tranning-todo.firebaseio.com",
    projectId: "tranning-todo",
    storageBucket: "tranning-todo.appspot.com",
    messagingSenderId: "669501731769"
};
firebase.initializeApp(config);

export default function noteData(endpoint){
    return firebase.database().ref(`${endpoint}`)
}