import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Chưa có địa chỉ email"),
  password: yup.string().required("Chưa có mật khẩu"),
});
export const registerSchema = yup.object({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Chưa có địa chỉ email"),
  name: yup.string().required("Chưa có tên người dùng"),
  password: yup.string().required("Chưa có mật khẩu"),
});
