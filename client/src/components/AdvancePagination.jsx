import Pagination from "react-bootstrap/Pagination";

const AdvancedPagination = ({
  setCurrentPage,
  CurrentPage,
  setLimit,
  limit,
  total,
}) => {
  console.log(limit)
  return (
    <div className="d-flex justify-content-center h-100">
      <ul className="pagination h-25 mx-2" >
          <select
            className="page-item page-link rounded"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={20}>20</option>
            <option value={48}>48</option>
          </select>
        </ul>
      <Pagination size="sm">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default AdvancedPagination;
