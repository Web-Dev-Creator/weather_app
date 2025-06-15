import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };

  return (
    <>
      <div class="form-body without-side">
        <div class="website-logo">
          <a href="#!">
            <div class="logo">
              <img class="logo-size" src="images/favicon.png" alt="logo" />
              <p className="text-white position-absolute logo-style">
                Your <span className="text-warning"> Weather</span>
              </p>
            </div>
          </a>
        </div>
        <div class="row">
          <div class="img-holder">
            <div class="bg"></div>
            <div class="info-holder">
              <img src="images/graphic3.svg" alt="img" />
            </div>
          </div>
          <div class="form-holder">
            <div class="form-content">
              <div class="form-items">
                <h3>Signup to account</h3>
                <p>Access your weather report from your city by account.</p>
                <lable>Your Email</lable>
                <input
                  class="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Enter your email"
                ></input>
                <lable>Your Password</lable>
                <input
                  class="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Enter your password"
                ></input>
                <div class="form-button">
                  <button
                    onClick={createUser}
                    id="submit"
                    type="submit"
                    class="ibtn"
                  >
                    Signup
                  </button>
                  {/* <a href="#!">Forget password?</a> */}
                </div>

                <div class="other-links">
                  <div class="text">Or signup with</div>
                  <a href="#!">
                    <i class="fab fa-facebook-f"></i>Facebook
                  </a>
                  <a href="#!">
                    <i class="fab fa-google"></i>Google
                  </a>
                  <a href="#!">
                    <i class="fab fa-linkedin-in"></i>Linkedin
                  </a>
                </div>
                <div class="page-links">
                  <a href="#!">Already have an account</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
