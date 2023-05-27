import { useQuery } from "react-query";
import { Layout } from "../components";
import { Menu, Posts, TitlePost } from "../components/HomePage";
import request from "../services/axios.service";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex">
        <Menu></Menu>
        <div className="w-[56%]   p-5">
          <Posts></Posts>
        </div>
        <TitlePost></TitlePost>
      </div>
    </Layout>
  );
};

export default HomePage;
