import Link from 'next/link'

const ForgotPasswordConfirmation = () => {
  return (
    <main>
      <section className="page--auth">
        <h1 className="form__heading">Check your email</h1>

        <div className="form-sections">
          <div>
            <p>We've sent password reset instructions to your email address.</p>
            <p className="txt--t-bold">If you haven't received the instructions within ten minutes, please try again, and make sure you enter the email correctly.</p>
          </div>

          <div className="form-section txt--accent">
            <span>&#8592; <Link href="/" className="txt--link txt--accent">Back to sign in</Link></span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ForgotPasswordConfirmation;