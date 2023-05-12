import { Logo } from "../components/common";
import { Button, Tabs, Menu, Breadcrumbs, Input } from "react-daisyui";
import { useState } from "react";
import { FiX } from "react-icons/fi";
const CreatePost = () => {
  return (
    <div className="max-w-5xl mx-auto mt-2 grid grid-cols-3">
      <div className="col-span-3 flex justify-between items-center mb-4">
        <Logo />
        <div className="ml-1 mr-auto">Create post</div>
        <CustomTabs />
        <Button color="ghost">
          <FiX />
        </Button>
      </div>
      <div className="col-span-2">
        <div
          className="overflow-y-scroll bg-blue-200"
          style={{ height: " 80vh" }}
        >
          <Button variant="outline" size="sm" className="my-4 mx-8">
            Add a cover image
          </Button>

          <Input
            placeholder="Title"
            border="false"
            size="lg"
            color="primary"
            className="w-full bg-transparent focus:outline-none active:bg-transparent padding-0 margin-0 text-6xl border-none"
          />
          <div className="mt-4 mx-8">List tag</div>
          <div>Text Editor</div>
        </div>
        <div className="space-x-2">
          <Button color="primary">Publish</Button>
          <Button color="error" variant="outline">
            Remove
          </Button>
        </div>
      </div>
      <div className="col-span-1">2</div>
    </div>
  );
};

export default CreatePost;

const CustomTabs = () => {
  return (
    <div className="mr-auto">
      <Breadcrumbs>
        <Breadcrumbs.Item>Edit</Breadcrumbs.Item>
        <Breadcrumbs.Item>Preview</Breadcrumbs.Item>
      </Breadcrumbs>
    </div>
  );
};
