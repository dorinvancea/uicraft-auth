"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import UICraftStates from "@/components/uicraftstates"
import { Button} from "@/components/buttons"

const ForgotPassword = () => {
  const [uicraftState, setUicraftState] = useState('default');

  const handleDropdownChange = (e) => {
    const selectedState = e.target.value;
    setUicraftState(selectedState);
  };

  return (
    <main>
      <section className="page--auth">
        <UICraftStates>
          <select onChange={handleDropdownChange}>
            <option value="default">Default</option>
            <option value="invalid-email">Invalid email</option>
          </select>
        </UICraftStates>

        <h1 className="form__heading">Forgot password?</h1>

        <div className="form-sections">
          <div className="form-section">
            <label className="form__label">Email</label>
            <input type="email" placeholder="Enter your email" className={`input ${uicraftState === 'invalid-email' && "input--error"}`}></input>
            {uicraftState === 'invalid-email' && (
              <div className="input--error input--error-message">
                <p>Please enter a valid email</p>
              </div>
            )}
          </div>

          <div className="form-section form-section--actions">
            <Button href="/forgot-password/confirmation" className="button--primary button--full-width">Recover my password</Button>
          </div>

          <div className="form-section">
            <p>We’ll email you a link to recover your password.</p>
          </div>

          <div className="form-section txt--accent">
            <span>&#8592; <Link href="/" className="txt--link txt--accent">Back to sign in</Link></span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ForgotPassword;