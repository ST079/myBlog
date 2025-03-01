import instance from "../utils/axios";
import { APIs } from "../constants";
import { getToken } from "../utils/token";

export const PublishedBlogs = ({title="",limit=5,page=1}) => {
  // const token = getToken();
  // console.log("Token being sent:", token);
  return instance.get(APIs.BLOGS + `/published-only?title=${title}&limit=${limit}&page=${page}`);
};




