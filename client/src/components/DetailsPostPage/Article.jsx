import Auth from "../HomePage/Auth";
import TagPost from "../HomePage/TagPost";
const Article = () => {
  return (
    <div className="  bg-slate-50 border  rounded-lg mb-10">
      <div className="w-full h-[350px] rounded-lg ">
        <img
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--FrnIjvQs--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u38xf3x32fama9g1klku.png"
          alt=""
        />
      </div>
      <div className=" p-8">
        <Auth></Auth>
        <h2 className=" text-5xl font-bold hover:text-primary mb-7 ">
          Drawing basic 2D shapes on a canvas.
        </h2>
        <div className="mb-10">
          <TagPost />
        </div>
        <div className="text-xl font-normal tracking-wider">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
          adipisci sapiente eos repudiandae molestiae soluta obcaecati? Beatae
          iusto soluta reiciendis! Laudantium nisi vitae consequuntur officia
          omnis voluptate repellendus! Ut, veniam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Consequatur tempora, consectetur fuga
          harum totam, hic obcaecati repudiandae dolorem laudantium id molestiae
          labore ea adipisci expedita odit soluta eveniet itaque. Dolores.
        </div>
      </div>
    </div>
  );
};

export default Article;
