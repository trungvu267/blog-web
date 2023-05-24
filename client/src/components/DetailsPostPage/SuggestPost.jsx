import { TitleComment } from "./TitleComment";
const SuggestPost = () => {
  return (
    <div className="p-12 bg-slate-50 border rounded-lg">
      <h2 className="text-3xl font-bold text-black mb-5">Read next</h2>
      <div>
        {/* NOTE: tên component đặt tên chưa đúng */}
        <TitleComment></TitleComment>
        <TitleComment></TitleComment>
        <TitleComment></TitleComment>
        <TitleComment></TitleComment>
      </div>
    </div>
  );
};

export default SuggestPost;
