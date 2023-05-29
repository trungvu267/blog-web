import request from "../services/axios.service";
export const createBlog = async () => {
  const res = await request.get("/blogs");
  return res;
};
