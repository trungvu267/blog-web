import { useQuery } from "react-query";
import { Layout } from "../components";
import { Menu, Posts, TitlePost } from "../components/HomePage";
import request from "../services/axios.service";
import { Link } from "react-router-dom";
import { Button } from "react-daisyui";
import { Fragment, useEffect, useState } from "react";

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
