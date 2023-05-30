import request from "../services/axios.service";
export const createBlog = async (data) => {
  const res = await request.post("/blogs", data);
  return res;
};
export const getAllBlog = async () => {
  const res = await request.get("/blogs");
  return res;
};
export const getPublishedBlogs = async () => {
  const res = await request.get("/blogs/published");
  return res;
};
export const getDetails = async (blogId) => {
  const res = await request.get(`/blogs/${blogId}/details`);
  return res;
};
