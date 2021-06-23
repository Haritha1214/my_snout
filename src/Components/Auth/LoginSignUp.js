import React, { Fragment } from "react";
import  "./LoginSignUp.css";
 
const LoginSignUp = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6 mx-auto p-0">
          <div className="card">
            <div className="login-box">
              <div className="login-snip">
                {" "}
                <input
                  id="tab-1"
                  type="radio"
                  name="tab"
                  className="sign-in"
                  checked
                />
                <label for="tab-1" className="tab">
                  Login
                </label>{" "}
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <label for="tab-2" className="tab">
                  Sign Up
                </label>
                <div className="login-space">
                  <div className="login">
                    <div className="group">
                      {" "}
                      <label for="user" className="label">
                        Email
                      </label>{" "}
                      <input
                        id="user"
                        type="email"
                        className="input"
                        placeholder="Enter your Email"
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label for="pass" className="label">
                        Password
                      </label>{" "}
                      <input
                        id="pass"
                        type="password"
                        className="input"
                        data-type="password"
                        placeholder="Enter your password"
                          
                      />
                      
                    </div>
                    <div className="group">
                      {" "}
                      <input
                        id="check"
                        type="checkbox"
                        className="check"
                        checked
                      />{" "}
                      <label for="check">
                        <span className="icon"></span> Keep me Signed in
                      </label>{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <input
                        type="submit"
                        className="button"
                        value="Sign In"
                      />{" "}
                    </div>
                    <div className="hr"></div>
                    <div className="foot">
                      {" "}
                      <a href="/">Forgot Password?</a>{" "}
                    </div>
                  </div>
                  <div className="sign-up-form">
                    <div className="group">
                      {" "}
                      <label for="user" className="label">
                        Full Name
                      </label>{" "}
                      <input
                        id="user"
                        type="text"
                        className="input"
                        placeholder="Enter your Full Name"
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label for="email" className="label">
                        Email
                      </label>{" "}
                      <input
                        id="email"
                        type="email"
                        className="input"
                        placeholder="Enter your Email"
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label for="Phone" className="label">
                        Phone Number
                      </label>{" "}
                      <input
                        id="Phone"
                        type="number"
                        className="input"
                        placeholder="Enter your Phone Number"
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label for="pass" className="label">
                         Password
                      </label>{" "}
                      <input
                        id="pass"
                        type="password"
                        className="input"
                        data-type="password"
                        placeholder="Enter your password"
                      />{" "}
                    </div>
                    
                    <div className="group">
                      {" "}
                      <input
                        type="submit"
                        className="button"
                        value="Sign Up"
                      />{" "}
                    </div>
                    <div className="hr"></div>
                    <div className="foot">
                      {" "}
                      <label for="tab-1">Have an Account? Login</label>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginSignUp;
