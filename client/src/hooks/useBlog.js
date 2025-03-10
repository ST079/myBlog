import React, { useState, useEffect } from "react";
import { PublishedBlogs, AllBlogs } from "../services/blogs";

const useBlog = ({ title, sort }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  //replace this entire code with tanstack query
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, msg } = await PublishedBlogs({
          title,
          sort,
          page: currentPage,
          limit,
        });

        setData(data);
        setMsg(msg);
        setTotal(data?.data.total);

      } catch (error) {
        const err = error?.response?.data?.msg || "Something went wrong";
        setError(err);
      } finally {
        setLoading(false);
        setTimeout(() => {
          setError("");
          setMsg("");
        }, 3000);
      }
    };
    fetchData();
  }, [title, limit, currentPage, sort]);

  return { data, error, loading, msg, limit, currentPage, total ,setCurrentPage,setLimit,setTotal};
};

export default useBlog;
