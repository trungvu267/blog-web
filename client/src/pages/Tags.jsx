import { Button, Input } from "react-daisyui";
import { Layout } from "../components";

const Tags = () => {
  return (
    <Layout>
      <div className="flex justify-between p-3">
        <h2 className="text-3xl font-bold text-black">Top Tags</h2>

        <div className="flex gap-3">
          <Input
            className="w-[250px] outline-none"
            placeholder="Search for tags"
          ></Input>
          <Button color="ghost">Following tags</Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-5">
        <div className="w-[400px] h-[250px] rounded-lg shadow-md p-3 border-t-8 border-green-400">
          <div>
            <Button color="ghost">#Following tags</Button>
          </div>
          <div className="p-1 mb-2">
            Once relegated to the browser as one of the 3 core technologies of
            the web, JavaScript can now be found almost anywhere you find code.
          </div>
          <span className="text-slate-500">125050 posts published</span>
          <div className="mt-2">
            <Button color="ghost" className="p-2 bg-slate-300">
              Follow
            </Button>
          </div>
        </div>
        <div className="w-[400px] h-[250px] rounded-lg shadow-md p-3 border-t-8 border-green-400">
          <div>
            <Button color="ghost">#Following tags</Button>
          </div>
          <div className="p-1 mb-2">
            Once relegated to the browser as one of the 3 core technologies of
            the web, JavaScript can now be found almost anywhere you find code.
          </div>
          <span className="text-slate-500">125050 posts published</span>
          <div className="mt-2">
            <Button color="ghost" className="p-2 bg-slate-300">
              Follow
            </Button>
          </div>
        </div>{" "}
        <div className="w-[400px] h-[250px] rounded-lg shadow-md p-3 border-t-8 border-green-400">
          <div>
            <Button color="ghost">#Following tags</Button>
          </div>
          <div className="p-1 mb-2">
            Once relegated to the browser as one of the 3 core technologies of
            the web, JavaScript can now be found almost anywhere you find code.
          </div>
          <span className="text-slate-500">125050 posts published</span>
          <div className="mt-2">
            <Button color="ghost" className="p-2 bg-slate-300">
              Follow{" "}
            </Button>
          </div>
        </div>
        <div className="w-[400px] h-[250px] rounded-lg shadow-md p-3 border-t-8 border-green-400">
          <div>
            <Button color="ghost">#Following tags</Button>
          </div>
          <div className="p-1 mb-2">
            Once relegated to the browser as one of the 3 core technologies of
            the web, JavaScript can now be found almost anywhere you find code.
          </div>
          <span className="text-slate-500">125050 posts published</span>
          <div className="mt-2">
            <Button color="ghost" className="p-2 bg-slate-300">
              Follow{" "}
            </Button>
          </div>
        </div>{" "}
        <div className="w-[400px] h-[250px] rounded-lg shadow-md p-3 border-t-8 border-green-400">
          <div>
            <Button color="ghost">#Following tags</Button>
          </div>
          <div className="p-1 mb-2">
            Once relegated to the browser as one of the 3 core technologies of
            the web, JavaScript can now be found almost anywhere you find code.
          </div>
          <span className="text-slate-500">125050 posts published</span>
          <div className="mt-2">
            <Button color="ghost" className="p-2 bg-slate-300">
              Follow{" "}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tags;
