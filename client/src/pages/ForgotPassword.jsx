import React, { useState } from "react";
import ForgotPass from "../assets/forgotPassword.png";
import { Link, useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  
  const back = () => {
    navigate("/login");
  };

  const handelNext = async (e) => {
    try {
      e.preventDefault();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="container d-flex vh-100 align-items-center">
      <div className="signin-content">
        <div className="signin-image">
          <figure>
            <img src={ForgotPass} alt="sing up image" />
          </figure>
        </div>
        <div className="signin-form">
          <h2 className="form-title">Forgot Password ? </h2>

          <form
            method="POST"
            className="register-form"
            id="login-form"
            onSubmit={(e) => handelNext(e)}
          >
            <div className="form-group">
              <label htmlFor="your_email">
                <i className="zmdi zmdi-email material-icons-name"></i>
              </label>
              <input
                type="email"
                name="email"
                id="your_email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-text">
              You will receice six digit token in your email address.
            </div>

            <div className="form-group form-button">
              <Link to="/verify-password">
                <input
                  type="submit"
                  name="next"
                  id="next"
                  className="form-submit"
                  value="Next"
                />
              </Link>
            </div>

            <div
              className=" d-flex"
              style={{ cursor: "pointer" }}
              onClick={back}
            >
              <i className="zmdi zmdi-chevron-left zmdi-hc-2x"></i>
              <p className="ms-2">Back</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;