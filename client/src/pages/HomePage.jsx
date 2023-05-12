// import { Button } from "react-daisyui";
import { Layout } from "../components";
import { successToast } from "../utils/toast";
import Auth from "../components/auth/Auth";
import TitleInformation from "../components/information/TitleInformation";
import Button from "../components/button/Button";
import { iconFollow } from "../utils/constant";
const HomePage = () => {
  return (
    <Layout>
      <div className="container flex ">
        <div className="w-[22%] mt-5">
          <div className=" bg-slate-100 border  py-3 px-5 rounded-lg">
            <h1 className="text-black text-lg font-bold mb-3">
              DEV Community is a community of 1,062,194 amazing developers
            </h1>
            <span>
              We're a place where coders share, stay up-to-date and grow their
              careers.
            </span>
            {/* <Button
              color="ghost"
              className="w-full border-2 mt-3"
              variant="outline"
            >
              Create account
            </Button>
            <Button color="ghost" className="w-full border-2 mt-3">
              Login
            </Button> */}
            <Button
              className={
                "text-black p-2 border mt-3 border-blue-500 w-full group hover:bg-blue-600"
              }
            >
              <span className="group-hover:text-white font-semibold text-slate-600">
                Create account
              </span>
            </Button>
            <Button
              className={"text-black p-2  w-full group hover:bg-blue-100"}
            >
              <span className="group-hover:text-blue-800 font-semibold text-slate-600">
                Login
              </span>
            </Button>
          </div>

          <div className="flex flex-col mt-5 mb-5">
            <Button
              className={
                "text-black text-start p-2  w-full group hover:bg-blue-100"
              }
            >
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <span className="group-hover:text-blue-800 font-semibold text-slate-600">
                  Home
                </span>
              </div>
            </Button>
            <Button
              className={
                "text-black text-start p-2  w-full group hover:bg-blue-100"
              }
            >
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <span className="group-hover:text-blue-800 font-semibold text-slate-600">
                  Home
                </span>
              </div>
            </Button>{" "}
            <Button
              className={
                "text-black text-start p-2  w-full group hover:bg-blue-100"
              }
            >
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <span className="group-hover:text-blue-800 font-semibold text-slate-600">
                  Home
                </span>
              </div>
            </Button>{" "}
            <Button
              className={
                "text-black text-start p-2  w-full group hover:bg-blue-100"
              }
            >
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <span className="group-hover:text-blue-800 font-semibold text-slate-600">
                  Home
                </span>
              </div>
            </Button>{" "}
          </div>

          <div className="flex gap-3 mb-5">
            {iconFollow.map((icon) => (
              <div
                className="w-10 rounded-lg h-10 p-2 hover:bg-slate-200 text-slate-600"
                key={icon.title}
              >
                {icon.image}
              </div>
            ))}
          </div>
          <div className=" bg-slate-100 border mb-3  py-3 px-5 rounded-lg">
            <div className="flex justify-between  mb-3">
              <h2 className=" text-base translate-y-1"> DEV Community</h2>
              <span className=" hover:bg-slate-200 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </span>
            </div>
            <img
              className="rounded-lg mb-3"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--GkDXbK0b--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oky7tpxe4z0f8ksng5ta.png"
              alt=""
            />
            <div className="text-xl font-bold mb-3 	text-decoration-line: underline  text-[#3b49df]">
              Life is too short to browse without dark mode.
            </div>
            <div>
              You can customize your theme, font, and more
              <a href="/" className="ml-1 text-blue-600">
                when you are signed
              </a>
              in.
            </div>
          </div>
          <div className=" bg-slate-100 border mb-3  py-3 px-5 rounded-lg">
            <div className="flex justify-between  mb-3">
              <h2 className=" text-base translate-y-1"> DEV Community</h2>
              <span className=" hover:bg-slate-200 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </span>
            </div>
            <img
              className="rounded-lg mb-3"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--GkDXbK0b--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oky7tpxe4z0f8ksng5ta.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[56%]   p-5">
          <div className="flex gap-1">
            <h3 className="p-3 font-bold rounded-lg hover:text-[#3b49df] hover:bg-white">
              Relevant
            </h3>
            <h3 className="p-3 font-bold rounded-lg hover:text-[#3b49df] hover:bg-white">
              Latest
            </h3>
            <h3 className="p-3 font-bold rounded-lg hover:text-[#3b49df] hover:bg-white">
              Top
            </h3>
          </div>
          <div className=" rounded-lg mb-3">
            <img
              className="rounded-lg"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--Rsd1j1dG--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x57e86jykz6x759rvf9c.png"
              alt="imgbanner"
            />
            <Auth></Auth>
          </div>
          <div className="border rounded-lg mb-3 border-slate-200">
            <div className="flex justify-between p-8">
              <h2> DEV Community</h2>
              <span className=" hover:bg-slate-200 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </span>
            </div>
            <img
              className="rounded-lg w-[530px] h-[280px] mx-auto mb-5"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s---UXjdvws--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_775/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wixrm7ejmrua4su7agha.jpg"
              alt="imgbanner"
            />

            <h1 className="px-8 text-2xl mb-2 font-bold text-black hover:text-[#3b49df] ">
              Need to stay up-to-date with the most relevant trends in software,
              such as AI, cloud computing, and all things frontend?
            </h1>
            <div className="p-8">
              <div className="mb-5">Look no further.</div>
              <div className="mb-5">
                You can do so much more once you <b>create your account</b>.
                Follow the devs and topics you care about, and keep up-to-date.
              </div>
              <span className="text-3xl font-bold mb-5 text-[#3b49df]">
                Start now
              </span>
              <div className="mt-5">Happy coding ❤️</div>
            </div>
          </div>
          <Auth></Auth>
          <Auth></Auth>
          <Auth></Auth>
          <Auth></Auth>
        </div>
        <div className="w-[25%] mt-5">
          <div className=" bg-slate-100 border mb-3  py-3 px-5 rounded-lg">
            <div className="flex justify-between  mb-3">
              <h2 className=" text-base translate-y-1"> DEV Community</h2>
              <span className=" hover:bg-slate-200 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </span>
            </div>
            <img
              className="rounded-lg mb-3"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--kUZijgSE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gxs2kw7xsfruxa53bqz3.png"
              alt=""
            />
            <div className="text-xl font-bold mb-3 	text-decoration-line: underline  text-[#3b49df]">
              Join the GitHub + DEV Hackathon!
            </div>
            <div>
              Utilize GitHub Actions or Codespaces, benefit open-source, and win
              up to $1,500 USD by sharing your project on DEV.
            </div>
          </div>

          <div className=" bg-slate-100 border mb-3  py-3  rounded-lg">
            <div className="flex justify-between px-5  mb-3">
              <h2 className=" text-base translate-y-1"> Listings</h2>
              <span className="text-sm font-medium text-[#3b49df]">
                See all
              </span>
            </div>
            <TitleInformation
              title={
                "23% off of The JavaScript Interview Bible CODE:JS2023- A Comprehensive Guide with 1000+ Essential Questions and Answers!"
              }
              comment={"education"}
            ></TitleInformation>
            <TitleInformation
              title={"Team or Solo: Which Path Leads to Project Success?"}
              comment={"3 comment"}
            ></TitleInformation>
            <TitleInformation
              title={"Team or Solo: Which Path Leads to Project Success?"}
              comment={"3 comment"}
            ></TitleInformation>
            <TitleInformation
              title={"Team or Solo: Which Path Leads to Project Success?"}
              comment={"3 comment"}
            ></TitleInformation>

            <Button
              className={"border   px-4 py-3 w-full group hover:bg-blue-100"}
            >
              <span className="group-hover:text-blue-800 font-semibold text-slate-600">
                Create a Listing
              </span>
            </Button>
          </div>
          <div className=" bg-slate-100 border mb-3    rounded-lg">
            <div className=" px-5 pt-3 text-black text-xl font-bold mb-3">
              #discuss
            </div>
            <TitleInformation
              title={"Team or Solo: Which Path Leads to Project Success?"}
              comment={"3 comment"}
            ></TitleInformation>
            <TitleInformation
              title={"Team or Solo: Which Path Leads to Project Success?"}
              comment={"3 comment"}
            ></TitleInformation>
            <TitleInformation
              title={"Team or Solo: Which Path Leads to Project Success?"}
              comment={"3 comment"}
            ></TitleInformation>
            <TitleInformation
              title={"Team or Solo: Which Path Leads to Project Success?"}
              comment={"3 comment"}
            ></TitleInformation>
          </div>
          <div className="  mb-3">
            <div className=" px-5 text-black text-base font-bold mt-5 mb-3">
              trending guides/resources
            </div>
            <TitleInformation
              title={"Team or Solo: Which Path Leads to Project Success?"}
              comment={"3 comment"}
            ></TitleInformation>
            <TitleInformation
              title={"Team or Solo: Which Path Leads to Project Success?"}
              comment={"3 comment"}
            ></TitleInformation>
            <TitleInformation
              title={"Team or Solo: Which Path Leads to Project Success?"}
              comment={"3 comment"}
            ></TitleInformation>
            <TitleInformation
              title={"Team or Solo: Which Path Leads to Project Success?"}
              comment={"3 comment"}
            ></TitleInformation>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
