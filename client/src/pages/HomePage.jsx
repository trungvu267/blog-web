import { Button } from "react-daisyui";
import { NavbarBlog } from "../components";
import { successToast } from "../utils/toast";
const HomePage = () => {
  return (
    <div>
      <NavbarBlog />
      HomePage
      <Button
        onClick={() => {
          successToast("Test 🐊");
        }}
      >
        Hello
      </Button>
    </div>
  );
};

export default HomePage;
