import { useState } from "react";
import Form from "../components/Form";
import { getAll } from "../api/useApi";
import { useNavigate } from "react-router-dom";

export default function FormPost() {
  const [postsData, setpostsData] = useState(null); //info guardada en DB
  const navigate = useNavigate();

  const sendData = async () => {
    const updatedUsers = await getAll();
    setpostsData(updatedUsers);
    navigate('/')
  };

  return (
    <>
      <div className="grid justify-items-center">
        <h1 className="text-5xl my-10"> Post Form</h1>
        <Form sendHandler={sendData} />
      </div>
    </>
  );
}
