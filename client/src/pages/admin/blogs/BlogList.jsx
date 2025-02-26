import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../../../components/Table";

const BlogList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(
          `http://localhost:8000/api/v1/blogs/all-blogs`
        );
        setData(data.msg || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="container p-3">
        <div className="heads d-flex justify-content-between">
          <h2>Blogs</h2>
          <button className="btn btn-success fw-bold btn-sm" style={{}}>
            {" "}
            + New Blog
          </button>
        </div>
        <hr />
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
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
    </>
  );
};

export default BlogList;
