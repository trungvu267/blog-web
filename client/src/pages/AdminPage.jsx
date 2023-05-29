import { useState } from "react";
import { Button } from "react-daisyui";
import { Layout } from "../components";
import { ViewListPost, ViewListTag, CreateTag } from "../components/AdminPage";
const tags = [
  {
    label: "Tạo danh mục bài viết",
    value: "createTag",
    component: <CreateTag />,
  },
  {
    label: "Xem danh mục bài viết",
    value: "viewListTag",
    component: <ViewListTag />,
  },
  {
    label: "Quản lý các bài viết",
    value: "viewListPost",
    component: <ViewListPost />,
  },
];
const AdminPage = () => {
  const [selectedTag, setSelectedTag] = useState(tags[0]);
  return (
    <Layout>
      <div className="grid grid-cols-6 h-[90vh]">
        <div className="col-span-1 space-y-2 pt-4">
          <Button
            color="primary"
            onClick={() => {
              setSelectedTag(tags[0]);
            }}
          >
            Tạo danh mục bài viết
          </Button>
          <Button
            color="primary"
            onClick={() => {
              setSelectedTag(tags[1]);
            }}
          >
            Xem danh mục bài viết
          </Button>
          <Button
            color="primary"
            onClick={() => {
              setSelectedTag(tags[2]);
            }}
          >
            Quản lý các bài viết
          </Button>
        </div>

        <div className="col-span-5 bg-base-200">{selectedTag.component}</div>
      </div>
    </Layout>
  );
};

export default AdminPage;
