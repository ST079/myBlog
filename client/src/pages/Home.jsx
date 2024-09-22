import React from "react";
import Img1 from "../../public/images/carousel/1.png";
import Img2 from "../../public/images/carousel/2.jpg";
import Img3 from "../../public/images/carousel/3.jpg";
import "./Home.css"
const Home = () => {
  return (
    <div>
      {/* carousel container */}
      <div
        id="carouselExampleRide"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: 300 }}>
            <img src={Img1} className="d-block w-100 h-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" style={{ height: 300 }}>
            <img src={Img2} className="d-block w-100 h-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" style={{ height: 300 }}>
            <img src={Img3} className="d-block w-100 h-100" alt="..." />
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

      {/* blogs container  */}
      <div className="blog-container mt-4">
        <h2>Latest Posts</h2>
        <div className="grid">
          <div className="border">
            Blogs
          </div>
          <div className="border">user</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
