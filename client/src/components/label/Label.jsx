const Label = ({ children }) => {
  return (
    <label className="font-medium text-xl" htmlFor="">
      {children}
    </label>
  );
};

export default Label;
