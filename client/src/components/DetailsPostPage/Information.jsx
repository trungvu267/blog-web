export const Information = ({ title, desc }) => {
  return (
    <div className="flex flex-col mt-3">
      <h2 className=" text-sm font-bold text-slate-800">{title}</h2>
      <span>{desc}</span>
    </div>
  );
};
