import { useState, useEffect, useContext, createContext } from "react";
import useBlog from "../hooks/useBlog";

export const BlogContext = createContext(null);
export const BlogContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [sort, setSort] = useState("");
  const [limit,setLimit] = useState(20);
  const [page,setPage]= useState(1);
  const { data, loading, error, msg } = useBlog({ title,sort,limit,page });
  return (
    <BlogContext.Provider value={{ blogs: data?.data, loading, error, msg ,setTitle,setSort,setLimit,setPage,limit,page}}>
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
