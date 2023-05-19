import { Button } from "react-daisyui";
import TitleInformation from "./TitleInformation";

const TitlePost = () => {
  return (
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
          Utilize GitHub Actions or Codespaces, benefit open-source, and win up
          to $1,500 USD by sharing your project on DEV.
        </div>
      </div>

      <div className=" bg-slate-100 border mb-3  py-3  rounded-lg">
        <div className="flex justify-between px-5  mb-3">
          <h2 className=" text-base translate-y-1"> Listings</h2>
          <span className="text-sm font-medium text-[#3b49df]">See all</span>
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
          color="ghost"
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
  );
};

export default TitlePost;
