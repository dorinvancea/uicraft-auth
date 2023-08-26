"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import ErrorMessage from "@/app/error-messages"
import UICraftStates from "@/components/uicraftstates"
import { Button, SignInWith } from "@/components/buttons"

const SignUp = () => {
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
            <option value="email-exists">Email already exists</option>
            <option value="pass-missing">Password is missing</option>
            <option value="pass-not-maching">Password doesn't match</option>
            <option value="weak-password">Weak password</option>
          </select>
        </UICraftStates>

        <h1 className="form__heading">Sign up</h1>

        <div className="form-sections">
          <div className="form-section">
            <label htmlFor="fullName" className="form__label">Full name</label>
            <input id="fullName" type="text" className={`input`} placeholder="e.g. John Snow"></input>
          </div>

          <div className="form-section">
            <label htmlFor="email" className="form__label">Email</label>

            <input id="email" type="email" placeholder="e.g. john@hey.com" className={`input ${(uicraftState === 'invalid-email' || uicraftState === 'email-exists') && "input--error"}`}></input>

            {uicraftState === 'invalid-email' && (
              <div className="input--error input--error-message">
                <p>{ErrorMessage.invalidEmail}</p>
              </div>
            )}

            {uicraftState === 'email-exists' && (
              <div className="input--error input--error-message">
                <p>{ErrorMessage.accountExists} <Link href="/auth" className="txt--link txt--accent">Sign in</Link></p>
              </div>
            )}
          </div>

          <div className="form-section">
            <label htmlFor="password" className="form__label">Password</label>
            <input id="password" type="password" placeholder="Please use a strong password" className={`input ${(uicraftState === 'pass-missing' || uicraftState === 'pass-not-maching' || uicraftState === 'weak-password' ) && "input--error"}`}></input>
            {uicraftState === 'pass-missing' && (
              <div className="input--error input--error-message">
                <p>{ErrorMessage.emptyPassword}</p>
              </div>
            )}
            {uicraftState === 'weak-password' && (
              <div className="input--error input--error-message">
                <p>{ErrorMessage.weakPassword}</p>
              </div>
            )}
          </div>

          <div className="form-section">
            <label htmlFor="confirmPassword" className="form__label">Confirm Password</label>
            <input id="confirmPassword" type="password" placeholder="Repeat your password" className={`input ${(uicraftState === 'pass-not-maching') && "input--error"}`}></input>
            {uicraftState === 'pass-not-maching' && (
              <div className="input--error input--error-message">
                <p>{ErrorMessage.passwordMismatch}</p>
              </div>
            )}
          </div>

          <div className="form-section form-section--actions">
            <Button className="button--primary button--full-width">Sign in</Button>
          </div>

          <div className="form-section">
            <span>
              <p>
                <span className="txt--t-semibold">Already have an account?</span><br />
                <Link href="/" className="txt--accent txt--link">Sign in</Link>
              </p>
            </span>
          </div>

          <div className="form-section">
            <div className="divider divider--with-label">
              <span className="divider__label">or sign up with</span>
            </div>
            {/* <SignInWith email href="#" /> */}
            <SignInWith apple href="#" />
            <SignInWith google href="#" />
            {/* <SignInWith facebook href="#" /> */}
            {/* <SignInWith x href="#" /> */}
            {/* <SignInWith linkedin href="#" /> */}
            {/* <SignInWith github href="#" /> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;