import { Button } from "react-daisyui";
import { Layout } from "../components";
import { successToast } from "../utils/toast";
import Post from "../components/post/Post";
import TitleInformation from "../components/information/TitleInformation";
// import Button from "../components/button/Button";
import { iconFollow } from "../utils/constant";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Posts from "../components/Posts";
const HomePage = () => {
  return (
    <Layout>
      <Posts></Posts>
    </Layout>
  );
};

export default HomePage;
