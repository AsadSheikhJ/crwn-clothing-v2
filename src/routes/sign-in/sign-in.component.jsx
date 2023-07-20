import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
  };
  return (
    <div>
      <p>Sign In Page</p>
      <button onClick={logGoogleUser}>SIGN IN Google Popup</button>
      <button onClick={logGoogleRedirectUser}>SIGN IN Goole Redirect</button>
    </div>
  );
};

export default SignIn;
