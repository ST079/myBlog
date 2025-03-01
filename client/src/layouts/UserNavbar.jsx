import React from "react";
import "./UserNavbar.css";
import { Link, useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    // console.log("logout");
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="#">
            <img
              src="/favicon.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top me-3"
            />
            iKoders
          </Link>
          {/* <!-- Search --> */}
          <nav className="navbar">
            <div className="container-fluid">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn my-btn" type="submit">
                  Search
                </button>
              </form>
              <button className="btn p-0" onClick={logout}>
                <i className="fa-duotone fa-solid fa-arrow-right-from-bracket mx-3 fs-5"></i>
              </button>
              <button className="btn p-0">
                <i className="fa-duotone fa-solid fa-bookmark cursor-pointer fs-5"></i>
              </button>
              <button className="btn p-0">
                <i className="fa-duotone fa-solid fa-bell cursor-pointer mx-3 fs-5"></i>
              </button>
            </div>
          </nav>
        </div>
      </nav>

      {/* <!-- Heading --> */}
      <div>
        <h1 className="w-100 text-center heading fw-bolder mt-5 mb-5">
          iKoders
        </h1>
      </div>

      {/* <!-- Navigation Second --> */}
      <nav
        className="navbar navbar-expand-lg"
        aria-label="Tenth navbar example"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample08"
            aria-controls="navbarsExample08"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse justify-content-md-center collapse"
            id="navbarsExample08"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/blogs/food">
                      Food
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blogs/lifestyle">
                      LifeStyle
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blogs/technology">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blogs/sports">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/writeforus">
                      Write About Us
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* line  */}
      <div className="mt-3 mb-4 pb-2">
        <hr className="line" />
      </div>
    </div>
  );
};

export default UserNavbar;
