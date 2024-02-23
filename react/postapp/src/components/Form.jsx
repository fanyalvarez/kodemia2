import { useForm } from "react-hook-form";
import ButtonElm from "./elements/ButtonElm";
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
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-4 gap-5 place-items-center w-3/6 bg-neutral-800 rounded-lg p-10 m-2 text-lg">
        <label>Title</label>
        <input
          className="w-full bg-zinc-700 rounded-md text-white px-4 py-2 mx-3 col-span-3 "
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />

        <label>Description</label>
        <textarea
          className="w-full bg-zinc-700 rounded-md text-white px-4 py-2 mx-3 col-span-3 "
          type="text"
          rows={8}
          placeholder="description"
          {...register("description", { required: true })}
        />

        <label>Image</label>
        <input
          className="w-full bg-zinc-700 rounded-md text-white px-4 py-2 mx-3 col-span-3"
          type="text"
          placeholder="https://picsum.photos/id/237/200/300"
          {...register("image", { required: true })}
        />
        <p className="text-xs text-slate-400">
          https://picsum.photos/id/237/200/300
        </p>
        <br />

        <ButtonElm variant="save" className="col-span-4">
          Send
        </ButtonElm>
      </form>
    </>
  );
}
