import { useForm } from "react-hook-form";
import ButtonElm from "../components/elements/buttonElm";
import { postUser } from "../api/useApi";

export default function Form({ sendHandler }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const resp = await postUser(data);
    console.log(resp);
    sendHandler();
  });

  return (
    <>
      <div className="w-full max-w-lg bg-neutral-800 rounded-md p-10 m-2">
        <h1 className="text-3xl">Form card</h1> <br />
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-3 gap-3 place-items-center">
          <label>name</label>
          <input
            className=" bg-zinc-700 rounded-md text-white px-4 py-2 mx-3 col-span-2 "
            type="text"
            placeholder="name"
            {...register("name", { required: true })}
          />

          <label>lastname</label>
          <input
            className=" bg-zinc-700 rounded-md text-white px-4 py-2 mx-3 col-span-2 "
            type="text"
            placeholder="lastname"
            {...register("lastname", { required: true })}
          />

          <label>imagen</label>
          <input
            className=" bg-zinc-700 rounded-md text-white px-4 py-2 mx-3 col-span-2 "
            type="text"
            placeholder="https://picsum.photos/id/237/200/300"
            {...register("image", { required: true })}
          />

          <ButtonElm variant="save"> Send </ButtonElm>
        </form>
      </div>
    </>
  );
}
