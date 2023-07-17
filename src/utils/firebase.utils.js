import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth"

import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup } from "firebase/auth";



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

const provider = new GoogleAuthProvider();

const auth = getAuth();
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // // The signed-in user info.
            // const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            console.log(error);
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // // The email of the user's account used.
            // const email = error.customData.email;
            // // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

}
// export const auth = getAuth(firebaseApp);

// import { getAuth, signInWithRedirect } from "firebase/auth";

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

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             console.log(result);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }