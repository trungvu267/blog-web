import request from "../services/axios.service";
export const createBlog = async (data) => {
  const res = await request.post("/blogs/", data);
  return res;
};
