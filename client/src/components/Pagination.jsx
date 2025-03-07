import React, { useState } from "react";
import { Link } from "react-router-dom";
const Pagination = ({ data, limit, page, setLimit, setPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState("");

  const totalPages = Math.ceil((data?.total || 0) / limit);

  console.log(data, page);
  let items = [];
  for (let i = 1; i <= totalPages; i++) {
    items.push(
      <li className="page-item" key={i}>
        <Link
          className={`page-link ${currentPage === i ? "active" : ""}`}
          onClick={() => {
            setPage(i);
            setCurrentPage(i);
          }}
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
    <div className="row">
      <div className="d-flex justify-content-center d-grid gap-2">
        <ul className="pagination">
          <select
            className="page-item page-link rounded"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={20}>20</option>
          </select>
        </ul>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <Link
                className="page-link"
                to="#"
                aria-label="Previous"
                onClick={() => {
                  setCurrentPage(1);
                  setPage(1);
                }}
              >
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            {items?.map((item) => item)}
            <li className="page-item">
              <Link className="page-link" to="#" onClick={() => {
                  setCurrentPage(totalPages);
                  setPage(totalPages);
                }} aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
