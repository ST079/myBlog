import instance from "../utils/axios";
import { APIs } from "../constants";


export const PublishedBlogs = ({title="",limit=20,page=1}) => { 
  
  return instance.get(APIs.BLOGS + `/published-only?title=${title}&limit=${limit}&page=${page}`);
};

export const AllBlogs = ()=>{
  return instance.get(APIs.BLOGS + "/all-blogs");
}



