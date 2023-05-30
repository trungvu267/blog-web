const TagPost = ({ tag }) => {
  return (
    <span
      className="p-2 rounded-lg text-sm hover:bg-base-200 cursor-pointer border"
      style={{
        color: tag?.bg_color,
        borderColor: tag?.bg_color,
      }}
    >
      # {tag?.name}
    </span>
  );
};

export default TagPost;
