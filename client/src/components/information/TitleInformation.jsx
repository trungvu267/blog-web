const TitleInformation = ({ title, comment }) => {
  return (
    <div className="px-5 py-4  hover:bg-white">
      <h4 className=" hover:text-[#3b49df] mb-2">{title}</h4>
      <span className="text-sm">{comment}</span>
    </div>
  );
};

export default TitleInformation;
