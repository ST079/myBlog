import React, { useState } from "react";
import { useBlogContext } from "../contexts/BlogContext";
import Logo from "../assets/logo.png";
import "./Blogs.css";
import { BlogLoader } from "../components/Loader";
import { DateFotmatter } from "../utils/date";
import { Link } from "react-router-dom";
import useBlog from "../hooks/useBlog";

const Blogs = () => {
  const [search, setSearch] = useState("");

  const { blogs, loading, err, msg } = useBlogContext();
  const handelErrorImg = (e) => {
    e.target.src = Logo;
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredBlogs = blogs?.data?.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

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
          onChange={handleSearch}
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
          <Link to="#" className="text-decoration-none text-secondary active">
            Published{" "}
            <span className="badge text-bg-secondary"> {blogs?.total}</span>
          </Link>
        </li>
      </div>

      {/* <!-- Blog Data --> */}
      <div className="row">
        {loading && (
          <>
            <BlogLoader />
            <BlogLoader />
          </>
        )}
        {blogs &&
          blogs?.data.length > 0 &&
          filteredBlogs.map((blog) => {
            return (
              <div key={blog?.slug} className="col-6">
                <div
                  className="card mb-3 border-0"
                  style={{ maxWidth: "540px" }}
                >
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="card-head d-flex justify-content-between align-items-center mb-2">
                          <button className="custom cursor-pointer">
                            {blog?.status}
                          </button>
                          <p>{DateFotmatter(blog?.createdAt)}</p>
                        </div>
                        <h6 className="card-title">
                          {blog?.title.slice(0, 20) + " ..."}
                        </h6>
                        <p
                          className="card-text lh-sm"
                          style={{ fontSize: "14px" }}
                        >
                          {blog?.content.slice(0, 100) + " ..."}
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
                            <i className="fa-regular fa-id-card"></i>{" "}
                            {blog?.author}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img
                        src={blog?.pictureUrl || ""}
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
            );
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
