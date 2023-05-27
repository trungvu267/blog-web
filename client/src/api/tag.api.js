import request from "../services/axios.service";
export const getListTag = async () => {
  const data = await request.get("/tags");
  return data;
};
