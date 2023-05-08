import { Button } from "react-daisyui";
import { Layout } from "../components";
import { successToast } from "../utils/toast";
const HomePage = () => {
  return (
    <Layout>
      HomePage
      <Button
        onClick={() => {
          successToast("Test 🐊");
        }}
      >
        Hello
      </Button>
    </Layout>
  );
};

export default HomePage;
