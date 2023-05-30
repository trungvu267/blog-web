import request from "../services/axios.service";

export const createComment = async (data) => {
  const res = await request.post("/comments/", data);
  return res;
};
export const getListComment = async (blogId) => {
  const res = await request.get(`/comments/all/${blogId}`);
  return res;
};
