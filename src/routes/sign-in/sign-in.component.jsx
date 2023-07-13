import { signInWithGooglePopup } from '../../utils/firebase.utils';
const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <p>Sign In Page</p>
      <button onClick={logGoogleUser}>CLICK ME TO SIGN IN</button>
    </div>
  );
};

export default SignIn;
