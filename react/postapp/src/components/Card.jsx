import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../api/useApi";
import ButtonElm from "./elements/ButtonElm";

export default function Card({ title, image, id }) {
  const navigate = useNavigate();
  // const params = useParams();

  const getById = async (id) => {
    const res = await getPost(id);
    navigate(`/${id}`);
  };

  return (
    <>
      <div className=" bg-stone-800 flex flex-col items-center rounded-lg p-4 gap-2 w-96">
        <img className="w-full object-cover h-[30rem]" src={image} alt="" />
        <h3 className="text-2xl">{title}</h3>
        <ButtonElm handler={() => getById(id)} variant="go">
          Go to Post
        </ButtonElm>
      </div>
    </>
  );
}
