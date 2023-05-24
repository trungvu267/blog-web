// TODO:Sửa lại import
import TagPost from "../HomePage/TagPost";
export const TitleComment = ({ small }) => {
  if (!small)
    return (
      <div className=" flex p-3 gap-5">
        <img
          className="w-[60px ] h-[60px] rounded-full"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--xuf5tW6V--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/468493/e1ecb528-6156-46ab-b02f-807a6241b96b.png"
          alt=""
        />
        <div>
          <h2 className=" hover:text-primary font-bold  text-xl">
            New in Vue.js 3.3: Two-Way Binding With defineModel Macro Eduard
          </h2>

          <span className=" text-start text-sm text-slate-700 font-semibold">
            Krivanek - <span>May 13</span>
          </span>
        </div>
      </div>
    );
  return (
    <div className=" flex p-3 gap-2">
      <img
        className="w-[30px ] h-[30px] rounded-full"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--xuf5tW6V--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/468493/e1ecb528-6156-46ab-b02f-807a6241b96b.png"
        alt=""
      />
      <div>
        <h2 className=" hover:text-primary font-bold text-base">
          New in Vue.js 3.3: Two-Way Binding With defineModel Macro Eduard
        </h2>

        <TagPost></TagPost>
        <TagPost></TagPost>
        <TagPost></TagPost>
      </div>
    </div>
  );
};
