import { SuggestPost } from "./SuggestPost";
const SuggestPosts = () => {
  return (
    <div className="p-12 bg-slate-50 border rounded-lg">
      <h2 className="text-3xl font-bold text-black mb-5">Read next</h2>
      <div>
        {/* NOTE: tên component đặt tên chưa đúng */}
        <SuggestPost></SuggestPost>
        <SuggestPost></SuggestPost>
        <SuggestPost></SuggestPost>
        <SuggestPost></SuggestPost>
      </div>
    </div>
  );
};

export default SuggestPosts;
