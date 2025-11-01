import { useState, useEffect, useContext, createContext } from "react";
import useBlog from "../hooks/useBlog";

export const BlogContext = createContext(null);
export const BlogContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [sort, setSort] = useState("");

  const {
    data,
    error,
    loading,
    msg,
    limit,
    currentPage,
    total,
    setCurrentPage,
    setLimit,
    setTotal,
  } = useBlog({
    title,
    sort,
  });
//  console.log("context current page:", currentPage);
  return (
    <BlogContext.Provider
      value={{
        blogs: data?.data,
        loading,
        error,
        msg,
        setTitle,
        setSort,
        currentPage,
        setCurrentPage,
        setLimit,
        limit,
        total,
        setTotal,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogContext must be used within a BlogContextProvider");
  }
  return context;
};
