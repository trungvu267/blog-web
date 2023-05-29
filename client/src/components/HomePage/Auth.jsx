const Auth = ({ author }) => {
  return (
    <div className="auth flex p-3 gap-2">
      <img
        className="w-[40px ] h-[40px] rounded-full"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--xuf5tW6V--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/468493/e1ecb528-6156-46ab-b02f-807a6241b96b.png"
        alt=""
      />
      <div>
        <h2 className=" text-primary font-medium ">{author?.name}</h2>
        <span className=" text-start text-sm">{author?.email}</span>
      </div>
    </div>
  );
};

export default Auth;
