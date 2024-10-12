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
  return <div className="p-3">
    <h2>Blog Details</h2>
    <hr />
    {data.length > 0 ? (
        <Table header={Object.keys(data[0])} body={data} />
      ) : (
        <>No Data Found</>
      )}
    </div>;
};

export default BlogList;
