import Link from 'next/link'

const ResetPasswordConfirmation = () => {
  return (
    <main>
      <section className="page--auth">
        <h1 className="form__heading">Reset complete</h1>

        <div className="form-sections">
          <div>
            <p>We've sent you an email to confirm.<br />
            You can use your new password to <Link className="txt--link txt--accent" href="/">Sign in</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResetPasswordConfirmation;