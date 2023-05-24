import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL || "https://localhost:5556";
const request = axios.create({
  baseURL: apiUrl,
  timeout: 1000,
  headers: {
    Accept: "application/json",
  },
});
request.interceptors.request.use(async (config) => {
  const customHeaders = {};
  const jsonValue = localStorage.getItem("ACCESS_TOKEN");
  const accessToken = JSON.parse(jsonValue);
  console.log({ accessToken: accessToken });
  if (accessToken) {
    customHeaders.authorization = `Bearer ${accessToken}`;
  }
  console.log("run interceptor");

  return {
    ...config,
    headers: {
      ...customHeaders, // auto attach token
      ...config.headers, // but you can override for some requests
    },
  };
});

async function get(url, params) {
  try {
    const { data, status } = await request.get(url, params);

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log("response status is: ", status);

    return data;
  } catch (error) {
    console.log(error);
  }
}
async function post(url, params) {
  try {
    const { data, status } = await request.post(url, params);

    // 👇️ "response status is: 200"
    console.log("response status is: ", status);
    // 👇️ "data response"

    console.log(JSON.stringify(data, null, 4));

    return data;
  } catch (error) {
    console.log(error.message);
    // TODO: cần kiểm tra lại
    throw new Error(error.message);
  }
}
export { get, post };
export default request;
