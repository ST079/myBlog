import React, { useState } from "react";
import VerifyPass from "../assets/verifyPassword.png";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const VerifyPassword = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const back = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="container d-flex vh-100 align-items-center">
      <div className="signin-content">
        <div className="signin-image">
          <figure>
            <img src={VerifyPass} alt="sing up image" />
          </figure>
        </div>
        <div className="signin-form">
          <h2 className="form-title">Verify Your Token !* </h2>

          <form method="POST" className="register-form" id="login-form">
            <div className="form-group">
              <label htmlFor="your_email">
                <i className="zmdi zmdi-email material-icons-name"></i>
              </label>
              <input
                type="email"
                name="email"
                id="your_email"
                placeholder="*********@gmail.com"
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="token">
                <i className="zmdi zmdi-wrench material-icons-name"></i>
              </label>
              <input
                type="number"
                name="token"
                id="token"
                placeholder="Your Token"
                required
                maxLength={6}
              />
            </div>
            <div className="form-text">Enter your six digit token.</div>

            <div className="form-group">
              <label htmlFor="your_pass">
                <i className="zmdi zmdi-key material-icons-name"></i>
              </label>
              <input
                type="text"
                name="password"
                id="your_pass"
                placeholder=" New Password"
                required
              />
            </div>

            <div className="form-group form-button">
              <input
                type="submit"
                name="next"
                id="next"
                className="form-submit"
                value="Change Password"
              />
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

export default VerifyPassword;
