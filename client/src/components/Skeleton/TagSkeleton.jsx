const TagSkeleton = () => {
  return (
    <div
      role="status"
      className="w-[400px] h-[250px] max-w-sm p-4 border border-base-300 rounded shadow animate-pulse md:p-6 "
    >
      <div className="h-2.5 bg-base-300 rounded-full  w-48 mb-4"></div>
      <div className="h-2.5 bg-base-300 rounded-full  w-48 mb-4"></div>
      <div className="h-2 bg-base-300 rounded-full  mb-2.5"></div>
      <div className="h-2 bg-base-300 rounded-full  mb-2.5"></div>
      <div className="h-2 bg-base-300 rounded-full  mb-2.5"></div>
      <div className="h-2 bg-base-300 rounded-full  mb-2.5"></div>
      <div className="h-2 bg-base-300 rounded-full  mb-2.5"></div>
      <div className="h-2 bg-base-300 rounded-full  mb-2.5"></div>
      <div className="h-2 bg-base-300 rounded-full "></div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default TagSkeleton;
