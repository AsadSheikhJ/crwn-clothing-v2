const SignUpForm = () => {
  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={() => {}}>
        <lable>Display Name</lable>
        <input type='text' required />

        <lable>Email</lable>
        <input type='email' required />

        <lable>Password</lable>
        <input type='password' required />

        <lable>Confirm Password</lable>
        <input type='password' required />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
