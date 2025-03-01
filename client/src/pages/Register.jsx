import { Link, useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import "./LoginSignup.css";
import SignUpImg from "../assets/signUp.png";
import { register } from "../services/users";
import Notify from "../components/Notify";

const Register = () => {
  const navigate = useNavigate("");
  const registerForm = useRef("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const handelSubmit = async (e) => {
    try {
      e.preventDefault();
      const form = registerForm.current;
      const formData = new FormData(form);
      const { data } = await register(formData);
      if (data) {
        setMessage(data?.data);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (err) {
      const error = err?.response?.data?.message.includes("E11000")
        ? "Email Already Taken"
        : err?.response?.data?.message;
      setError(error);
    } finally {
      setTimeout(() => {
        setError("");
        setStatus("");
      }, 3000);
    }
  };

  return (
    <div className="container">
      <div className="signup-content">
        <div className="signup-form">
          <h2 className="form-title">Sign up</h2>
          {message && <Notify variant="success" msg={message} color="green" />}
          {error && <Notify msg={error} />}
          <form
            method="POST"
            className="register-form"
            id="register-form"
            ref={registerForm}
            onSubmit={(e) => handelSubmit(e)}
          >
            <div className="form-group">
              <label htmlFor="name">
                <i className="zmdi zmdi-account material-icons-name"></i>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <i className="zmdi zmdi-email material-icons-name"></i>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="pass">
                <i className="zmdi zmdi-lock material-icons-name"></i>
              </label>
              <input
                type="password"
                name="password"
                id="pass"
                placeholder="Password"
                required
              />
            </div>

            <div className="form-group form-button">
              <input
                type="submit"
                name="signup"
                id="signup"
                className="form-submit"
                value="Register"
              />
            </div>
          </form>
        </div>
        <div className="signup-image">
          <figure>
            <img src={SignUpImg} alt="sing up image" />
          </figure>
          <Link to="/login" className="signup-image-link">
            I am already member
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
