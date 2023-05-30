import request from "../services/axios.service";

export const createComment = async (data) => {
  const res = await request.post("/comments/", data);
  return res;
};
export const getListComment = async (data) => {
  const res = await request.get("/comments", { data });
  return res;
};
