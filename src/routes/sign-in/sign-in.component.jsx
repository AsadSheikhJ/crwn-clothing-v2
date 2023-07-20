import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <p>Sign In Page</p>
      <button onClick={logGoogleUser}>CLICK ME TO SIGN IN</button>
    </div>
  );
};

export default SignIn;
