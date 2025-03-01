import axios from "axios";
import React, { useEffect, useState } from "react";

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
          <h2>Blog Lists</h2>
          <button className="btn btn-success fw-bold btn-sm">
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
              <th>Pages</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((blog, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{blog.title}</td>
                  <td>{blog.author}</td>
                  <td>{blog.pages}</td>
                  <td>{blog.status}</td>
                  <td>
                    <button className="btn btn-primary btn-sm mx-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              );
            }
            )}
          </tbody>
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
