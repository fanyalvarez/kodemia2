export const Card = ({ name, lastname, image }) => {
  return (
    <>
      <div className=" bg-stone-800 flex flex-col items-center rounded-lg p-4 gap-5 w-64">
        <img className="w-20 h-20 rounded-full object-cover" src={image} alt="" />
        <h3 className="text-2xl">{name}</h3>
        <h6 className="text-md">{lastname}</h6>
      </div>
    </>
  );
};
