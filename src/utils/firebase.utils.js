import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup, getRedirectResult,
    GoogleAuthProvider,
} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOsXOtdmt_77ohsyI1M-SmJJW6V3hQcFY",
    authDomain: "crwn-clothing-db-aac4c.firebaseapp.com",
    projectId: "crwn-clothing-db-aac4c",
    storageBucket: "crwn-clothing-db-aac4c.appspot.com",
    messagingSenderId: "354167172721",
    appId: "1:354167172721:web:dc47eae1f33677c8c5f5d0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);
export default firebaseApp;



// const auth = getAuth();
// const googleAuthProvider = new GoogleAuthProvider();
// googleAuthProvider.setCustomParameters({
//     prompt: "select_account"
// });

// export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider)