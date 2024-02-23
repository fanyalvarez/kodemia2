

export default function Home() {
  return (
    <>
      <div>
        <h2 className="text-2xl">Posts</h2> <br />
        <div className="flex flex-wrap gap-2 p-2 border border-gray-500 rounded-lg place-items-center ">
          {usersData &&
            usersData.map(({ name, lastname, image, key }) => (
              <Card key={key} name={name} lastname={lastname} image={image} />
            ))}
        </div>
      </div>
    </>
  );
}
