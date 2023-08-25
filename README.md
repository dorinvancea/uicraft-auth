A generic authentication UI prototype + form validation states.  
**(!) It covers only UI states—No actual client/server side validation.**

---

**Demo: [https://uicraft-auth.netlify.app/](https://uicraft-auth.netlify.app/)**  
Change the UI states for each screen using the dark bar at the bottom of the screen.  
Try it out!

![UICraft Auth](/src/images/uicraft-screenshot@2x.png?raw=true "Title")

---

## Purpose
I wanted to make it easy for designers/front-end devs to visualise UI state changes in a generic Sign in/Sign up form + the confirmation screens.

This will make the handover to a front-end engineer more streamlined, with fewer unknowns, and less back-and-forth.

## Getting Started
To make it easy to play with various states, I used React([Next.js](https://nextjs.org)), but the HTML and CSS can be easily moved in other apps/frameworks with minimal rework.

1. Download or clone the code.  
2. Go to the download folder using your terminal and install the packages:
```bash
npm install
```

Then run the app:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages and structure:
|Page| Url|
|---|---|
|Sign in| / |
|Sign up| /signup |
|Forgot password| /forgot-password |
|- Confirmation| /forgot-password/confirmation |
|Reset password| /reset-password |
|- Confirmation| /reset-password/confirmation |

## Add more states

To add more states to one of the screens, simply add a **new option** in this section:
```js
  <UICraftStates>
    <select onChange={handleDropdownChange}>
      ...
      <option value="new-state">New state</option>
    </select>
  </UICraftStates>
```

To see the change in the UI, add a conditional class to an HTML element:

```js
<label htmlFor="email" className={`form__label ${uicraftState === 'new-state' && "form__label--green"}`}>Email</label>
```

To add some HTML when you select your new state, and the following conditional somewhere inside `<main></main>`:
```js
  {uicraftState === 'new-state' && (
    <div>
      <p>There should be some green text on that label!</p>
    </div>
  )}
```

The label will only turn green if you define the css class. Add the following somewhere in the `/src/styles/base/auth.scss`:
```css
.form__label--green { color: green }
```

## Other notes
- Responsive UI
- Darkmode support
