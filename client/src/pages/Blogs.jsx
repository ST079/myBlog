
import React,{useEffect} from 'react'
import useBlog from "../hooks/useBlog"
import { getToken } from '../utils/token';

const Blogs = () => {
  const {data} = useBlog({  title: ""});
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default Blogs