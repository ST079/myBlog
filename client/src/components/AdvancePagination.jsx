import Pagination from "react-bootstrap/Pagination";
import { usePagination, DOTS } from "../hooks/usePagination";

const AdvancedPagination = ({
  setCurrentPage,
  currentPage,
  setLimit,
  limit,
  total,
}) => {
  let active = currentPage;
  let items = [];
  const totalNumberOfPages = Math.ceil(total / limit);
  for (let number = 1; number <= totalNumberOfPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
//  console.log("advace current page:", currentPage);
  const paginationRange = usePagination({
    currentPage,
    totalCount: total,
    pageSize: limit,
    siblingCount: 1,
  });
//  console.log("pagination range:", paginationRange);
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="row">
        <div className="col-auto">
          <ul className="pagination">
            <select
              className="page-item page-link rounded"
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
            >
              <option value={2}>2</option>
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={20}>20</option>
            </select>
          </ul>
        </div>
        <div className="col-auto">
          <Pagination size="sm">
            <Pagination.First onClick={() => setCurrentPage(1)} />
            <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
            {paginationRange.map((pageNumber, index) => {
              if (pageNumber === DOTS) {
                return <Pagination.Ellipsis key={`${index} - ${pageNumber}`} />;
              }
              return (
                <Pagination.Item
                  key={pageNumber}
                  active={pageNumber === currentPage}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            })}
            <Pagination.Next
              onClick={() => {
                currentPage < totalNumberOfPages
                  ? setCurrentPage(currentPage + 1)
                  : null;
              }}
            />
            <Pagination.Last
              onClick={() => setCurrentPage(totalNumberOfPages)}
            />
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPagination;
