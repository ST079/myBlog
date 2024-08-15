import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        {/* navigations */}
        <nav className="navbar border-bottom">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="#">
              <img
                src="../public/favicon.png"
                alt="Logo"
                width="30"
                height="30"
                className="d-inline-block align-text-top me-2"
              />
              iKoders
            </a>

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
        <div>
          <h1 className="w-100 text-center heading fw-bolder mt-5 mb-5">
            iKoders
          </h1>
        </div>
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

        <div className="mt-3 mb-4">
          <hr className="line" />
        </div>

        {/* carousel */}
        <div className=" mt-5">
          <div
            id="carouselExampleRide"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/public/images/carousel/image.png"
                  className="d-block w-100"
                  alt="..."
                  style={{ height: 400 }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/public/images/carousel/2.jpg"
                  className="d-block w-100"
                  style={{ height: 400 }}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/public/images/carousel/3.jpg"
                  className="d-block w-100"
                  style={{ height: 400 }}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className=" mt-5">
          <h2>Latest Posts</h2>
          <div className="my-grid">
            <div className="items d-flex flex-wrap">
              <div className="card mb-3 me-3">
                <img
                  src="/images/cards/c1.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </div>

              <div className="card mb-3 me-3">
                <img
                  src="/images/cards/c2.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </div>

              <div className="card mb-3 me-3">
                <img
                  src="/images/cards/c3.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </div>

              <div className="card mb-3 me-3">
                <img
                  src="/images/cards/c4.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </div>

              <div className="card mb-3 me-3">
                <img
                  src="/public/images/cards/c5.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </div>

              <div className="card mb-3 me-3">
                <img
                  src="/images/cards/c6.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </div>
            </div>

            <div className="items d-flex flex-column justify-content-start">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search a keyword here......"
                aria-label="Search"
              />

              <div className="sidebar-box mt-5">
                <div className="bio text-center">
                  <img
                    src="images/cards/c6.png"
                    alt="Image Placeholder"
                    className="img-fluid"
                  />
                  <div className="bio-body">
                    <h2>David Craig</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Exercitationem facilis sunt repellendus excepturi beatae
                      porro debitis voluptate nulla quo veniam fuga sit
                      molestias minus.
                    </p>
                    <p>
                      <a href="#" className="btn btn-sm rounded">
                        Read my bio
                      </a>
                    </p>
                    <p className="social">
                      <a href="#" className="p-2">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                      <a href="#" className="p-2">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#" className="p-2">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="#" className="p-2">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h4>Popular Posts</h4>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <nav aria-label="Page navigation" className="text-center">
            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link" href="#">
                  &lt;
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  &gt;
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
