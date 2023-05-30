import request from "../services/axios.service";
export const setBookmark = async (data) => {
  const res = await request.post("/bookmark", { blogId: data });
  return res;
};
export const getListBookmark = async () => {
  const res = await request.get("/bookmark");
  return res;
};
export const getListBookmarkDetails = async () => {
  const res = await request.get("/bookmark/details");
  return res;
};
