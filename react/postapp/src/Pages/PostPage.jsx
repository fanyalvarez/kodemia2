import { useEffect, useState } from "react";
import Post from "../components/Post";
import { useParams } from "react-router-dom";
import { getPost } from "../api/useApi";

export default function PostPage() {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    async function loadPost() {
      const resp = await getPost(params.id);
      setData(resp);
    }
    loadPost();
  }, []);
  // console.log(data);

  return (
    <div className="w-10/12 flex justify-center mx-auto">
      <Post
        image={data.image}
        title={data.title}
        description={data.description}
      />
      {/* 
      <div className="mt-10 grid gap-8">
        <img src={image} alt="" className="object-cover h-60 w-full" />
        <h1 className="text-5xl text-center">{title}</h1>
        <p className="text-2xl">{description}</p>
      </div> */}
    </div>
  );
}
