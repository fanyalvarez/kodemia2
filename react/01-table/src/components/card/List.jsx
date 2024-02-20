import { useState } from "react";

function List() {
  const [persons, setPersons] = useState([
    {
      "name": "Ciara Pacocha",
      "info": {
          "title": "Mr.",
          "age": 48,
          "phone": "736-517-2868",
          "email": "lucinda92@hotmail.com"
      }
  },
  {
      "name": "Tamia Kilback",
      "info": {
          "title": "Prof.",
          "age": 37,
          "phone": "(571) 681-3975",
          "email": "collier.carmine@hotmail.com"
      }
  },
  {
      "name": "Tamia Nolan",
      "info": {
          "title": "Ms.",
          "age": 37,
          "phone": "791-897-6566 x587",
          "email": "lelia02@yahoo.com"
      }
  },
  {
      "name": "Giovani Morissette",
      "info": {
          "title": "Prof.",
          "age": 48,
          "phone": "549-668-9509 x2103",
          "email": "omari00@gmail.com"
      }
  },
  {
      "name": "Frankie Toy",
      "info": {
          "title": "Mr.",
          "age": 51,
          "phone": "1-840-390-7115",
          "email": "jones.kamron@yahoo.com"
      }
  },
  {
      "name": "Arnoldo Volkman",
      "info": {
          "title": "Mr.",
          "age": 56,
          "phone": "(881) 253-7879 x9722",
          "email": "stracke.evelyn@yahoo.com"
      }
  },
  {
      "name": "Desiree Huel",
      "info": {
          "title": "Dr.",
          "age": 21,
          "phone": "254.660.2894",
          "email": "larissa45@gmail.com"
      }
  }
  ]);

  return (
    <>
      {persons.map((person) => (
        <div
          key={person.name}
          className=" bg-slate-700 w-64 m-5 p-5">
             <h4>{person.name}</h4>
          <div className="  bg-slate-500 flex flex-col justify-between " >
            <p>age:{person.info.age}</p>
            <p>phone:{person.info.phone}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default List;
