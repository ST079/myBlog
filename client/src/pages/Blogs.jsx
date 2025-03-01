<<<<<<< HEAD
import React from 'react'

const Blogs = () => {
  return (
    <div>Blogs</div>
=======
import React,{useEffect} from 'react'
import useBlog from "../hooks/useBlog"
import { getToken } from '../utils/token';

const Blogs = () => {
  useEffect(() => {
      const token = getToken();
    }, []);
  const {data} = useBlog({  title: ""});
  return (
    <div>{JSON.stringify(data)}</div>
>>>>>>> 5a3069d (blogs route modified)
  )
}

export default Blogs