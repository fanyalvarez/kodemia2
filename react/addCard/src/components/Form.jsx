import { useState } from "react";

export const Form = (props) => {
  const { saveHandler } = props;
  const [formData, setFormData] = useState({
    imgSrc: "",
    fullName: "",
    location: "",
    description: "",
    github: false,
    linkedin: false,
    frontend: false,
    twitter: false,
    instagram: false,
  });

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target; // Destructure name, type, value, and checked from event.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // Use checked for checkboxes, value for others
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const cardData = formData ;
    saveHandler(cardData);
  };

  return (
    <div className="flex flex-col w-96 bg-slate-700 rounded-lg">
      <h1 className="text-2xl text-center font-bold ">Formulario</h1>
      <form
        className="p-3 gap-4 flex flex-col text-black"
        onSubmit={handleSubmit}>
        <label className="flex flex-col">
          Imagen
          <input
            name="imgSrc"
            value={formData.imgSrc}
            type="text"
            placeholder="https://picsum.photos/id/237"
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col">
          Nombre
          <input
            value={formData.fullName}
            type="text"
            placeholder="Jessica Randall"
            onChange={handleChange}
            name="fullName"
          />
        </label>
        <label className="flex flex-col">
          Localizacion
          <input
            value={formData.location}
            type="text"
            placeholder="London, United Kingdom"
            onChange={handleChange}
            name="location"
          />
        </label>
        <label className="flex flex-col">
          Description
          <input
            value={formData.description}
            type="text"
            placeholder="Front-end developer and avid reader"
            onChange={handleChange}
            name="description"
          />
        </label>

        <div className="grid grid-cols-2">
          <div className=" w-40 ">
            <label>
              <input
                checked={formData.github}
                type="checkbox"
                onChange={handleChange}
                name="github"
              />
              GitHub
            </label>
          </div>

          <div className=" w-40 ">
            <label>
              <input
                name="linkedin"
                checked={formData.linkedin}
                type="checkbox"
                onChange={handleChange}
              />
              Linkedin
            </label>
          </div>

          <div className=" w-40 ">
            <label>
              <input
                name="frontend"
                checked={formData.frontend}
                type="checkbox"
                onChange={handleChange}
              />
              Frontend Mentor
            </label>
          </div>

          <div className=" w-40 ">
            <label>
              <input
                name="twitter"
                checked={formData.twitter}
                type="checkbox"
                onChange={handleChange}
              />
              Twitter
            </label>
          </div>

          <div className=" w-40 ">
            <label>
              <input
                name="instagram"
                checked={formData.instagram}
                type="checkbox"
                onChange={handleChange}
              />
              Instagram
            </label>
          </div>
        </div>

        <button onClick={handleChange} className="bg-violet-700 px-1 py-1.5">
          Enviar
        </button>
      </form>
    </div>
  );
};
