const Label = ({ children }) => {
  return (
    <label className="text-black font-medium text-xl" htmlFor="">
      {children}
    </label>
  );
};

export default Label;