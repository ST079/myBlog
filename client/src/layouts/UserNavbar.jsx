import React from "react";
import "./UserNavbar.css";

const UserNavbar = () => {
  return (
      <div>
        <nav className="navbar border-bottom">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="#">
              <img
                src="/favicon.png"
                alt="Logo"
                width="30"
                height="30"
                className="d-inline-block align-text-top me-3"
              />
              iKoders
            </a>
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
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Food
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        LifeStyle
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Technology
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sports
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Write About Us
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
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
