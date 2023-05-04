import { Button } from "react-daisyui";
import { successToast } from "../utils/toast";
const HomePage = () => {
  return (
    <div>
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
