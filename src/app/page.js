"use client"
import React, { useState } from "react";
import Link from 'next/link'
import { Button, SignInWith } from "@/components/buttons"
import UICraftStates from "@/components/uicraftstates"

const SignIn = () => {
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
            <option value="pass-error">Wrong Password, email is known</option>
            <option value="email-and-pass-error">Wrong Email and Password</option>
          </select>
        </UICraftStates>

        <h1 className="form__heading">Sign in</h1>

        <div className="form-sections">
          <div className="form-section">
            <label htmlFor="email" className="form__label">Email</label>

            <input id="email" placeholder="Enter your email" type="email" className={`input ${(uicraftState === 'email-and-pass-error' || uicraftState === 'invalid-email') && "input--error"}`} ></input>

            {uicraftState === 'invalid-email' && (
              <div className="input--error input--error-message">
                <p>Please enter a valid email</p>
              </div>
            )}
          </div>

          <div className="form-section">
            <label htmlFor="password" className="form__label">Password <Link href="/forgot-password" className="txt--accent txt--link txt--t-normal">Forgot password?</Link></label>

            <input id="password" placeholder="Enter your password" type="password" className={`input ${(uicraftState === 'pass-error' || uicraftState === 'email-and-pass-error') && "input--error"}`} />

            {uicraftState === 'pass-error' && (
              <div className="input--error input--error-message">
                <p>Wrong password</p>
              </div>
            )}

            {uicraftState === 'email-and-pass-error' && (
              <div className="input--error input--error-message">
                <p className="txt--w-35">Your password is incorrect or this account doesn’t exist.</p>
              </div>
            )}
          </div>

          <div className="form-section form-section--actions">
            <Button className="button--primary button--full-width">Sign in</Button>
          </div>

          <div className="form-section">
            <span>
              <p><span className="txt--t-semibold">Don’t have an account?</span> <br />
              <Link href="/signup" className="txt--accent txt--link">Sign up for free</Link>
              </p>
            </span>
          </div>

          <div className="form-section">
            <div className="divider divider--with-label">
              <span className="divider__label">or sign in with</span>
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

export default SignIn;