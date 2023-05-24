import { Button, Input } from "react-daisyui";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Label from "../components/label/Label";
import { registerSchema } from "../utils/schema";
import { useRegister } from "../hooks/auth.hook";
import { path } from "../utils/path";
import { errorToast } from "../utils/toast";
const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const {
    handleRegister,
    mutation: { isLoading, isError, isSuccess },
  } = useRegister();
  const navigate = useNavigate();
  useEffect(() => {
    isSuccess && navigate(path.home);
    !!isError && errorToast("Có lỗi xảy ra vui lòng thử lại");
  }, [isSuccess]);
  return (
    <div className=" p-3 max-h-full">
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="w-[640px] rounded-lg border p-10 flex justify-center flex-col border-base-300 bg-base-300 mx-auto"
      >
        <div className="mx-auto text-center mt-10 mb-5">
          <h2 className="text-3xl font-bold">Welcome to DEV Community</h2>
          <p>DEV Community is a community of 1,060,606 amazing developers</p>
        </div>
        <div className="flex flex-col gap-5">
          {/* <Button className="bg-black">
              <svg
            className="w-[70px] h-[40px] bg-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 100 900 200"
          >
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>

              <span className="text-center p-3"> Continue with Apple</span>
            </Button>
            <Button className={"bg-[#2F4F4F]"}>
              <span className="text-center p-3"> Continue with Forem</span>
            </Button>
            <Button className={"bg-[#242121]"}>
              <span className="text-center p-3"> Continue with GitHub</span>
            </Button>{" "}
            <Button className={"bg-[#39b0d4]"}>
              <span className="text-center p-3"> Continue with Twitter</span>
            </Button> */}
          <Button
            type="button"
            className="border-none text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            <svg
              className="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </Button>
          <Button
            type="button"
            className="text-white border-none text-center bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center mr-2 mb-2"
          >
            <svg
              className="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
              ></path>
            </svg>
            Sign in with Facebook
          </Button>
        </div>
        <div className="text-center relative p-3 ">
          <span className="">
            Have a account?{" "}
            <Link className="text-blue-600" to={"/login"}>
              Login
            </Link>
          </span>
          <p className="absolute border z-[-1] border-slate-200 top-[50%] w-full left-0 "></p>
        </div>
        <div className="mb-3 gap-y-5  mx-auto justify-center  flex flex-col">
          <Label>Tên người dùng</Label>
          <Input {...register("name")} placeholder="Enter your fullname name" />
        </div>
        <div className="mb-3 gap-y-5  mx-auto justify-center  flex flex-col">
          <Label>Email</Label>
          <Input
            {...register("email")}
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-3 gap-y-5  mx-auto justify-center  flex flex-col">
          <Label>Mật khẩu</Label>
          <Input
            {...register("password")}
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <Button color="primary" loading={isLoading}>
          Đăng ký
        </Button>
      </form>
    </div>
  );
};

export default SignUpPage;
