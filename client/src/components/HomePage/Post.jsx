const Post = () => {
  return (
    <div className="border rounded-lg mb-3 border-slate-200">
      <div className="auth flex p-3 gap-2">
        <img
          className="w-[40px ] h-[40px] rounded-full"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--xuf5tW6V--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/468493/e1ecb528-6156-46ab-b02f-807a6241b96b.png"
          alt=""
        />
        <div>
          <h2 className=" text-slate-900 font-medium ">Daniel Reis</h2>
          <span className=" text-start text-sm">May 8</span>
        </div>
      </div>
      <h1 className="px-8 text-2xl mb-2 font-bold text-black hover:text-[#3b49df] ">
        Database 101: How social media “likes” are stored in a database
      </h1>
      <div className="flex px-8 mb-3">
        <span className="p-2 rounded-lg text-sm hover:bg-slate-100 cursor-pointer">
          # webdev
        </span>
        <span className="p-2 rounded-lg text-sm hover:bg-slate-100 cursor-pointer">
          # webdev
        </span>
        <span className="p-2 rounded-lg text-sm hover:bg-slate-100 cursor-pointer">
          # webdev
        </span>
        <span className="p-2 rounded-lg text-sm hover:bg-slate-100 cursor-pointer">
          # webdev
        </span>
        <span className="p-2 rounded-lg text-sm hover:bg-slate-100 cursor-pointer">
          # webdev
        </span>
      </div>
      <div className="flex  px-8 mb-5 justify-between">
        <div className="flex gap-3  text-sm">
          <span className="px-5 py-2 rounded-lg hover:bg-slate-200">
            325 reactions
          </span>
          <div className="flex gap-1 px-5 py-2 rounded-lg hover:bg-slate-200">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                />
              </svg>
            </span>
            <span className="text-sm"> 56 comment</span>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-xs translate-y-3">6 min read</span>
          <span className="px-1 py-3 rounded-lg hover:bg-slate-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
