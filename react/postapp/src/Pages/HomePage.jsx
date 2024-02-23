import { useEffect, useState } from "react";
import { getAll } from "../api/useApi";
import Card from "../components/Card";

export default function HomePage() {
  const [postsData, setpostsData] = useState(null); //info guardada en DB

  useEffect(() => {
    const getUsers = async () => {
      const data = await getAll();
      setpostsData(data);
    };
    getUsers();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 place-items-center">
        <h1 className="text-5xl my-10">Posts</h1>
        <div className="flex flex-wrap  gap-4 justify-center">
          {postsData &&
            postsData.map(({ title, image, id }) => (
              <Card key={id} title={title} image={image} id={id} />
            ))}
        </div>
      </div>
    </>
  );
}
