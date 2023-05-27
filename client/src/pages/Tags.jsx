import { Layout } from "../components";
import { Navbar, ListTag } from "../components/TagsPage";
const Tags = () => {
  return (
    <Layout>
      <div className="container">
        <Navbar />

        <ListTag />
      </div>
    </Layout>
  );
};

export default Tags;
