import { Button, Input } from "react-daisyui";

const Navbar = () => {
  return (
    <div className="flex justify-between p-3">
      <h2 className="text-3xl font-bold text-black">Top Tags</h2>

      <div className="flex gap-3 items-center">
        <Input
          className="w-[250px] outline-none"
          placeholder="Search for tags"
          size="sm"
        ></Input>
        <Button color="ghost">Following tags</Button>
      </div>
    </div>
  );
};

export default Navbar;
