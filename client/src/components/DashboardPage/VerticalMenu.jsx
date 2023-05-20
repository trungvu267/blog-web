import { Button } from "react-daisyui";
const VerticalMenu = () => {
  return (
    <div className="w-[20%] flex flex-col gap-y-1 ">
      {options.map((option) => (
        <SelectOptionBtn option={option} />
      ))}
    </div>
  );
};

export default VerticalMenu;
const options = [
  {
    label: <span>Analytics</span>,
    count: 0,
  },
  {
    label: <span>Posts</span>,
    count: 0,
  },
  {
    label: <span>Series</span>,
    count: 0,
  },
  {
    label: <span>Followers</span>,
    count: 0,
  },
  {
    label: <span>Following tags</span>,
    count: 0,
  },
  {
    label: <span>Following users</span>,
    count: 0,
  },
  {
    label: <span>Following organizations</span>,
    count: 0,
  },
  {
    label: (
      <div className="flex text-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 -translate-y-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
        <span>listings</span>
      </div>
    ),
    count: 0,
  },
];

const SelectOptionBtn = ({ option }) => {
  const { label, count } = option;
  return (
    <Button
      color="ghost"
      className="flex justify-between bg-base-300 text-center"
    >
      {label}
      {count}
    </Button>
  );
};
