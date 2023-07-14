import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfS-XjPzOi0OMpwm-Qc4A6xblmWPA5qe8",
    authDomain: "crwn-clothing-web-643f0.firebaseapp.com",
    projectId: "crwn-clothing-web-643f0",
    storageBucket: "crwn-clothing-web-643f0.appspot.com",
    messagingSenderId: "563239520383",
    appId: "1:563239520383:web:e53b0663f8f50971fe174a"
};



const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
// Before
// ==============
// signInWithRedirect(auth, new GoogleAuthProvider());
// After the page redirects back
// console.log(await getRedirectResult(auth));

// After
// ==============
// export const signInWithGoogle = await signInWithPopup(auth, new GoogleAuthProvider());

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// export const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
}