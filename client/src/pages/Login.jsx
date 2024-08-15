import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./LoginSignup.css";
import SignInImg from "../assets/signIn.png";
import { login } from "../services/users";
import Notify from "../components/Notify";
import { setToken } from "../utils/token";

const Login = () => {
  const navigate = useNavigate("");
  //login mechanism
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handelLogin = async (e) => {
    try {
      e.preventDefault();
      const { data } = await login(payload);
      if (data?.data) {
        setToken(data.data);
        navigate("/");
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="container">
      <div className="signin-content">
        <div className="signin-image">
          <figure>
            <img src={SignInImg} alt="sing up image" />
          </figure>
          <Link to="/register" className="signup-image-link">
            Create an account
          </Link>
        </div>
        <div className="signin-form">
          <h2 className="form-title">Sign In</h2>
          {error && <Notify msg={error} />} 
          <form
            method="POST"
            className="register-form"
            id="login-form"
            onSubmit={(e) => handelLogin(e)}
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
                required
                onChange={(e) =>
                  setPayload((prev) => {
                    return { ...prev, email: e.target.value };
                  })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="your_pass">
                <i className="zmdi zmdi-lock material-icons-name"></i>
              </label>
              <input
                type="password"
                name="password"
                id="your_pass"
                placeholder="Password"
                required
                onChange={(e) =>
                  setPayload((prev) => {
                    return { ...prev, password: e.target.value };
                  })
                }
              />
            </div>

            <div>
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>

            <div className="form-group">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                className="agree-term"
              />
              <label htmlFor="remember-me" className="label-agree-term">
                <span>
                  <span></span>
                </span>
                Remember me
              </label>
            </div>
            <div className="form-group form-button">
              <input
                type="submit"
                name="signin"
                id="signin"
                className="form-submit"
                value="Log-in"
              />
            </div>
          </form>
          <div className="social-login">
            <span className="social-label">Or login with</span>
            <ul className="socials">
              <li>
                <a href="#">
                  <i className="display-flex-center zmdi zmdi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="display-flex-center zmdi zmdi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="display-flex-center zmdi zmdi-google"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
