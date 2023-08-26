"use client"
import React, { useState } from 'react';
import ErrorMessage from "@/app/error-messages"
import UICraftStates from "@/components/uicraftstates"
import { Button } from "@/components/buttons"

const ResetPassword = () => {
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
            <option value="pass-missing">Password is missing</option>
            <option value="pass-not-maching">Password doesn't match</option>
            <option value="weak-password">Weak password</option>
          </select>
        </UICraftStates>

        <h1 className="form__heading">Reset password</h1>

        <div className="form-sections">

          <div className="form-section">
            <label htmlFor="password" className="form__label">New password</label>
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
            <label htmlFor="confirmPassword" className="form__label">Confirm new password</label>
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

        </div>
      </section>
    </main>
  );
};

export default ResetPassword;