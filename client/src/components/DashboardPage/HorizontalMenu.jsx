import React from "react";

const HorizontalMenu = () => {
  return (
    <div className="grid grid-cols-4 mt-10 gap-10">
      <HorizontalItem />
      <HorizontalItem />
      <HorizontalItem />
      <HorizontalItem />
    </div>
  );
};

export default HorizontalMenu;

const HorizontalItem = () => {
  return (
    <div className="text-lg p-6 rounded-lg bg-base-300">
      <span className="text-3xl font-bold "> 0</span>
      <div>Total post reactions</div>
    </div>
  );
};
