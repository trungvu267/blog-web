import * as request from "../services/axios.service.js";

export const login = async ({ email, password }) => {
  const data = await request.post("/users/sign-in", {
    email,
    password,
  });
  return data;
};
