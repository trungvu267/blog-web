const Button = ({ className, children }) => {
  return (
    <button
      className={`p-3 mb-3 w-[540px] rounded-lg mx-auto text-white ${className}`}
    >
      <span> {children}</span>
    </button>
  );
};

export default Button;
