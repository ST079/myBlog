import React, { useState, useEffect } from "react";
import VerifyPass from "../assets/verifyPassword.png";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Notify from "../components/Notify";
import { verifyFpToken } from "../services/users";

const VerifyPassword = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  const [payload, setPayload] = useState({
    email: state?.email,
    token: "",
    newPassword: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const back = () => {
    navigate("/forgot-password");
  };

  const handelChangePassword = async (e) => {
    try {
      e.preventDefault();
      const { data } = await verifyFpToken(payload);
      if (data) {
        setMessage(data?.data);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (err) {
      const error = err?.response?.data?.message;
      setError(error);
    } finally {
      setTimeout(() => {
        setMessage("");
        setError("");
        setPayload({
          email: state?.email,
          token: "",
          newPassword: "",
        });
      }, 3000);
    }
  };

  //prevent the direct ascess
  useEffect(() => {
    if (!state) {
      navigate("/login");
    }
  }, [state, navigate]);

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
          {message && <Notify variant="success" msg={message} color="green" />}
          {error && <Notify msg={error} />}
          <form
            method="POST"
            className="register-form"
            onSubmit={(e) => handelChangePassword(e)}
          >
            <div className="form-group">
              <label htmlFor="your_email">
                <i className="zmdi zmdi-email material-icons-name"></i>
              </label>
              <input
                type="email"
                name="email"
                id="your_email"
                value={state?.email}
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="token">
                <i className="zmdi zmdi-wrench material-icons-name"></i>
              </label>
              <input
                type="text"
                name="token"
                id="token"
                placeholder="Your Token"
                maxLength={6}
                onChange={(e) => {
                  setPayload((prev) => {
                    return { ...prev, token: e.target.value };
                  });
                }}
                required
              />
            </div>
            <div className="form-text">Enter your six digit token.</div>

            <div className="form-group">
              <label htmlFor="newPassword">
                <i className="zmdi zmdi-key material-icons-name"></i>
              </label>
              <input
                type="text"
                name="newPssword"
                id="newPassword"
                placeholder=" New Password"
                onChange={(e) => {
                  setPayload((prev) => {
                    return { ...prev, newPassword: e.target.value };
                  });
                }}
                required
              />
            </div>
            <div className="form-group form-button">
              <input
                type="submit"
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
