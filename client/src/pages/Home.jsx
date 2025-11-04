import React from "react";
import Img1 from "../assets/carousel/1.png";
import Img2 from "../assets/carousel/2.jpg";
import Img3 from "../assets/carousel//3.jpg";
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
          <div className="carousel-item active" style={{ height: 400 }}>
            <img src={Img1} className="d-block w-100 h-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Your first blog posts won’t be perfect, but you just have to do it. </h5>
              <div>
                <button className="btn btn-success m-1">Sports</button>
                <button className="btn btn-primary m-1">Technology</button>
                <button className="btn btn-danger m-1">Foods</button>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{ height: 400 }}>
            <img src={Img2} className="d-block w-100 h-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>I’m always reinventing my blog for the better. </h5>
              <div>
                <button className="btn btn-success m-1">Sports</button>
                <button className="btn btn-primary m-1">Technology</button>
                <button className="btn btn-danger m-1">Foods</button>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{ height: 400 }}>
            <img src={Img3} className="d-block w-100 h-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Read quality, all the time, every day. Then write.</h5>
              <div>
                <button className="btn btn-success m-1">Sports</button>
                <button className="btn btn-primary m-1">Technology</button>
                <button className="btn btn-danger m-1">Foods</button>
              </div>
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

      </div>
    </div>
  );
};

export default Home;
