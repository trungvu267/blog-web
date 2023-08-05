import request from "../services/axios.service";
export const createBlog = async (data) => {
  const res = await request.post("/articles", data, { timeout: 5000 });
  return res;
};
export const updateBlog = async (data) => {
  const res = await request.put(`/articles/${data.blogId}`, data);
  return res;
};
export const publishBlog = async (data) => {
  const res = await request.put(`/articles/${data.blogId}/publish`, data);
  return res;
};
export const getAllBlog = async () => {
  const res = await request.get("/articles");
  return res;
};
export const getPublishedBlogs = async () => {
  const res = await request.get("/articles/published");
  return res;
};
export const getDetails = async (blogId) => {
  const res = await request.get(`/articles/${blogId}/details`);
  return res;
};
export const upLoadTitleImage = async (formData) => {
  const res = await request.post(`/articles/upload-title-image`, formData, {
    timeout: 5000,
  });
  return res;
};
// TODO: REMOVE IMAGE
