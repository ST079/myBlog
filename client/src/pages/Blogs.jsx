import React, { useEffect } from "react";
import useBlog from "../hooks/useBlog";
import { useBlogContext } from "../contexts/BlogContext";
import Logo from "../assets/logo.png";
import "./Blogs.css";
import { BlogLoader } from "../components/Loader";

const Blogs = () => {
  const { blogs,loading,err,msg } = useBlogContext();
  const handelErrorImg = (e) => {
    e.target.src = Logo;
  };

  return (
    <div className="p-4">
      {/* search */}
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
      <div className="count d-flex mb-4 fw-bold ">
        <li className="list-unstyled pe-4">
          <a href="#" className="text-decoration-none text-secondary active">
            All
          </a>
        </li>
        <li className="list-unstyled pe-4">
          <a href="#" className="text-decoration-none text-secondary">
            Published
          </a>
        </li>
        <li className="list-unstyled pe-4">
          <a href="#" className="text-decoration-none text-secondary">
            Drafts
          </a>
        </li>
      </div>

      {/* <!-- Blog Data --> */}
      <div className="row">
        {loading && <>
        <BlogLoader />
        <BlogLoader />
        </>}
        {blogs && blogs?.data.length > 0 && blogs.data.map(blog=>{
          return (
            <div key={blogs?.slug} className="col">
              <div className="card mb-3 border-0" style={{ maxWidth: "540" }}>
                <div className="row g-0">
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="card-head d-flex justify-content-between align-items-center mb-2">
                        <button className="custom cursor-pointer">Published</button>
                        <p>26 Dec, 2025</p>
                      </div>
                      <h6 className="card-title">How to Be s Good Developer?</h6>
                      <p className="card-text lh-sm" style={{ fontSize: "14px" }}>
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </p>
                      <div className="card-text d-flex justify-content-between align-items-center">
                        <div className="blog-btns">
                          <button className="blog-btn btn">
                            <i className="fa-solid fa-ellipsis fs-6"></i>
                          </button>
                          <button className="blog-btn btn">
                            <i className="fa-duotone fa-solid fa-bookmark"></i>
                          </button>
                        </div>

                        <p className="text-body-secondary blog-details">
                          <i className="fa-regular fa-id-card"></i> Sujan Tamang
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img
                      src={""}
                      className="img-fluid rounded-start default-img"
                      alt="..."
                      onError={(e) => {
                        handelErrorImg(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

          )
        })}
      </div>

      {/* pagination */}
      <div className="pageNumber d-flex align-items-center justify-content-center pt-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
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
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
        </div>
    </div>
  );
};

export default Blogs;
