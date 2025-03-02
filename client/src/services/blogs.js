import instance from "../utils/axios";
import { APIs } from "../constants";
import { getToken } from "../utils/token";

export const PublishedBlogs = ({title="",limit=8,page=1}) => {
  return instance.get(APIs.BLOGS + `/published-only?title=${title}&limit=${limit}&page=${page}`);
};




