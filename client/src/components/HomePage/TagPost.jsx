const TagPost = ({ tag }) => {
  return (
    <span className="p-2 rounded-lg text-sm hover:bg-base-200 cursor-pointer">
      <span
        // style={{ color: text_color }}
        className="font-bold"
      >
        #
      </span>{" "}
      {tag}
    </span>
  );
};

export default TagPost;
