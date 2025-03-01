import React, { useEffect } from "react";
import useBlog from "../hooks/useBlog";
import { useBlogContext } from "../contexts/BlogContext";
import Logo from "../assets/logo.png";
import "./Blogs.css"

const Blogs = () => {
  const { blogs } = useBlogContext();
  const handelErrorImg = (e) => {
    e.target.src = Logo;
  }
  
  return (
    <div className="p-4">
      <h2>Blogs</h2>
      <div className="search mb-4 d-flex justify-content-between">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Blogs"
          className="w-50"
        />
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort By
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Latest
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                A-Z
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Oldest
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Popular
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="count d-flex mb-4">
        <li className="list-unstyled pe-4">
          <a href="#" className="text-decoration-none">
            All
          </a>
        </li>
        <li className="list-unstyled pe-4">
          <a href="#" className="text-decoration-none">
            Published
          </a>
        </li>
        <li className="list-unstyled pe-4">
          <a href="#" className="text-decoration-none">
            Drafts
          </a>
        </li>
      </div>

      {/* <!-- row 1 --> */}
      <div className="row">
        <div className="col">
          <div className="card mb-3" style={{'maxWidth': '540'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={""} className="img-fluid rounded-start default-img" alt="..." 
                onError={(e)=>{handelErrorImg(e)}}/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="card-text">
                    <p className="text-body-secondary ">
                    <i className="fa-solid fa-calendar-days"></i> 2005/05/05
                    </p>
                    <p className="text-body-secondary ">
                      <i className="fa-regular fa-id-card"></i> Sujan Tamang
                    </p>
                    <div className="blog-btns">
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" style={{'maxWidth': '540'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={""} className="img-fluid rounded-start default-img" alt="..." 
                onError={(e)=>{handelErrorImg(e)}}/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- row 2 --> */}
      <div className="row">
        <div className="col">
          <div className="card mb-3" style={{'maxWidth': '540'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={""} className="img-fluid rounded-start default-img" alt="..."
                onError={(e)=>{handelErrorImg(e)}} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" style={{'maxWidth': '540'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={""} className="img-fluid rounded-start default-img" alt="..." 
                onError={(e)=>{handelErrorImg(e)}}/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- row 3 --> */}
      <div className="row">
        <div className="col">
          <div className="card mb-3" style={{'maxWidth': '540'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={""} className="img-fluid rounded-start default-img" alt="..." 
                 onError={(e)=>{handelErrorImg(e)}}/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" style={{'maxWidth': '540'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={""} className="img-fluid rounded-start default-img" alt="..." 
                 onError={(e)=>{handelErrorImg(e)}} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- row 4 --> */}
      <div className="row">
        <div className="col">
          <div className="card mb-3" style={{'maxWidth': '540'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={""} className="img-fluid rounded-start default-img" alt="..." 
                 onError={(e)=>{handelErrorImg(e)}}/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" style={{'maxWidth': '540'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={""} className="img-fluid rounded-start default-img" alt="..." 
                 onError={(e)=>{handelErrorImg(e)}}/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
