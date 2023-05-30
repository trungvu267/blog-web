import request from "../services/axios.service";
export const setReaction = async (data) => {
  const res = await request.post("/reactions", { blogId: data });
  return res;
};
export const getListReaction = async () => {
  const res = await request.get("/reactions");
  return res;
};
