import { Button } from "react-daisyui";
const Tag = () => {
  return (
    <div className="w-[400px] h-[250px] rounded-lg shadow-md p-3 border-t-8 border-green-400">
      <div>
        <Button color="ghost">#Following tags</Button>
      </div>
      <div className="p-1 mb-2">
        Once relegated to the browser as one of the 3 core technologies of the
        web, JavaScript can now be found almost anywhere you find code.
      </div>
      <span className="text-slate-500">125050 posts published</span>
      <div className="mt-2">
        <Button color="primary" className="p-2 " size="sm" variant="outline">
          Following
        </Button>
      </div>
    </div>
  );
};
export default Tag;
