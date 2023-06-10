import { Layout } from "../components";
import {
  ReactionBar,
  RightBar,
  MainSection,
} from "../components/DetailsPostPage";
const ViewPost = () => {
  return (
    <Layout>
      <div className="container flex gap-x-5 ">
        <ReactionBar />
        <MainSection />
        {/* <RightBar /> */}
      </div>
    </Layout>
  );
};

export default ViewPost;
