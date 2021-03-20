import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';

export const initializedLogInFrameWork = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
}

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const newUser = res.user
            newUser.success = true;
            newUser.error = '';
            return newUser;
        })
        .catch(err => {
            const newUser = {}
            newUser.success = false;
            newUser.error = err.message;
            return newUser
        })
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            updateUserName(name)
            const newUser = res.user
            newUser.success = true;
            newUser.error = '';
            return newUser;
        })
        .catch(err => {
            const newUser = {}
            newUser.success = false;
            newUser.error = err.message;
            return newUser
        })
}

export const singInUserWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUser = res.user
            newUser.success = true;
            newUser.error = '';
            return newUser;
        })
        .catch(err => {
            const newUser = {}
            newUser.success = false;
            newUser.error = err.message;
            return newUser
        })
}

export const signOut = () => {
    firebase.auth().signOut()
    .then(res => {
        const signOutUser = { name: '', email: '', password: '', confirm_password: '', error: '', success: false }
        return signOutUser
    })
}

export const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    })
}