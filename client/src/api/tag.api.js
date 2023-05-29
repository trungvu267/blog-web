import request from "../services/axios.service";
export const getListTag = async () => {
  const data = await request.get("/tags");
  return data;
};
export const createTag = async ({ name, text_color, bg_color }) => {
  const data = await request.post("/tags", {
    name,
    text_color,
    bg_color,
  });
  return data;
};
