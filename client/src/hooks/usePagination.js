export const DOTS = "...";

const range = (start, end) => {
  let length = end - start + 1;
  //create an array of certain length and set the elements within it from start value to end value
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount,
  currentPage,
}) => {
    
};
