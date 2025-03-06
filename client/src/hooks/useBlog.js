import React, {useState,useEffect} from 'react'
import { PublishedBlogs , AllBlogs} from '../services/blogs';

const useBlog = ({title, page, limit}) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    //replace this entire code with tanstack query
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const {data,msg} = await PublishedBlogs({title, page, limit});
                setData(data);
                setMsg(msg);
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
    }, [title,limit,page]);

    return { data, error, loading ,msg };
}

export default useBlog