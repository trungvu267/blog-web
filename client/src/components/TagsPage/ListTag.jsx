import { useEffect, useState } from "react";
import Tag from "./Tag";
import request from "../../services/axios.service";

const ListTag = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await request.get("/tags");
      setTags(data.data);
      // return data;
    };
    fetchData();
  }, []);

  if (!tags) return;
  return (
    <div className="grid grid-cols-3 gap-10 mt-5">
      {tags.length > 0 && tags.map((tag) => <Tag key={tag.id} data={tag} />)}
    </div>
  );
};

export default ListTag;
