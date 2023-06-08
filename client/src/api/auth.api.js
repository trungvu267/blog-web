import * as request from "../services/axios.service.js";

export const login = async ({ email, password }) => {
  const data = await request.post("/users/sign-in", {
    email,
    password,
  });
  return data;
};

export const register = async ({ email, name, password }) => {
  const data = await request.post("/users/sign-up", {
    email,
    name,
    password,
  });
  return data;
};
export const authWithGoogle = async () => {
  const data = await request.get("/users/auth/google");
  return data;
};
