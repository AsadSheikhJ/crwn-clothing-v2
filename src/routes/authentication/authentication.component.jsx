import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    console.log(response);
  }, []);

  return (
    <div>
      <p>Sign In Page</p>
      {/* <button onClick={logGoogleUser}>SIGN IN Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>SIGN IN Goole Redirect</button> */}

      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
