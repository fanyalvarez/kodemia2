import "./App.css";
import Form from "./components/Form";
import { getAll } from "./api/useApi";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [usersData, setUsersData] = useState(null); //info guardada en DB

  useEffect(() => {
    const getUsers = async () => {
      const data = await getAll();
      setUsersData(data);
    };
    getUsers();
  }, []);

  const sendData = async () => {
    const updatedUsers = await getAll();
    setUsersData(updatedUsers);
  };

  return (
    <>
      <Form sendHandler={sendData} />
      
      {/* cards */}
      <div>
        <h2 className="text-2xl">Cards</h2> <br />
        <div className="grid grid-cols-4 p-2 border border-gray-500 rounded-lg">
          {usersData &&
            usersData.map(({ name, lastname, image, key }) => (
              <Card key={key} name={name} lastname={lastname} image={image} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
