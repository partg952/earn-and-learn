import React from "react";
import "./SignUp.scss";
import SimpleLogin from "../../Assets/simple-login.gif";
import Google from "../../Assets/google.svg";
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAuth,
  
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {getDatabase,ref,set} from 'firebase/database';
import { app } from "../../firebase";
function SignUp() {
  const history = useNavigate();
  const db = getDatabase(app);
  const auth = getAuth(app);
  const googleAuth = new GoogleAuthProvider(auth);

  return (
    <div>
      <ToastContainer />
      <h1>Think you have all the answers? Come Join us!</h1>
      <div id="main-box">
        <img id="simple-login" src={SimpleLogin} alt="" />
        <h2>Create Your Account</h2>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            if (e.target[2].value == e.target[3].value) {
              createUserWithEmailAndPassword(
                auth,
                e.target[4].value,
                e.target[3].value
              )
                .then((user) => {
                  toast("Account Created!")
                  set(ref(db, user.user.uid + "/"), {
                    email: user.user.email,
                    name: user.user.displayName,
                  }).then(() => {
                    history("/walkthrough");
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            } else {
              toast("Both the passwords do not match!");
            }
          }}
        >
          <input
            type="text"
            id="name"
            placeholder="Enter your Name *"
            
          />
          <br />
          <input
            type="number"
            id="number"
            placeholder="Enter your Phone Number *"
            
          />
          <br />
          <input
            type="password"
            className="password"
            placeholder="Enter a Password *"
            
          />
          <br />
          <input
            type="password"
            name=""
            id=""
            className="password"
            placeholder="Confirm your Password *"
            
          />
          <br />
          <input
            type="email"
            id="email"
            placeholder="Enter your email *"
            
          />
          <br />
          <div id="checkboxes">
            <input type="checkbox" name="accept-interview" id="" required={true} />
            <label htmlFor="accept-interview">
              I Accept To Be A Part of Follow Up Interviews
            </label>
            <br />
            <input type="checkbox" name="accept-terms" id="" required={true} />
            <label htmlFor="accept-terms">
              I Accept the <u>terms and conditions</u>
            </label>
          </div>
          <span id="buttons">
            <button type="submit" id="create-account">
              Create Account
            </button>
            <p>Or</p>
            <button
              id="google"
              onClick={() => {
                signInWithPopup(auth, googleAuth)
                  .then((user) => {
                    console.log(user.user);
                    set(ref(db,user.user.uid+'/'),{
                      email:user.user.email,
                      name:user.user.displayName
                    }).then(()=>{
                      history("/walkthrough")
                    })
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              <img src={Google} alt="" />
              Sign in with Google
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
