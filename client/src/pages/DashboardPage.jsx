import { Layout } from "../components";
import {
  VerticalMenu,
  MainScreen,
  HorizontalMenu,
} from "../components/DashboardPage";
const DashboardPage = () => {
  return (
    <Layout>
      <div className="container">
        <HorizontalMenu />
        <div className="flex mt-5 pb-5 gap-5">
          <VerticalMenu />
          <MainScreen />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
