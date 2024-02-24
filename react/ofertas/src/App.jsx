import React, { useEffect, useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { Job } from "./components/Job";
import { postJob } from "./api/jobsApi";
import { useNavigate } from "react-router-dom";

function App() {
  // const navigate = useNavigate();
  const [jobs, setJobs] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const job = {
    title: "Remote Senior Full Stack React Developer",
    description:
      "4+ years of software development experience\n2+ years of experience with React.js",
    salary: "100k/yr",
    skills: "html/css/js",
  };

  useEffect(() => {
    async function loadJobs(data) {
      const response = await postJob(data);
      console.log(response)
      setJobs(response);
      // navigate("/")
    }
  }, []);
console.log(jobs)

  return (
    <>
      <div className="bg-gray-800 p-4 rounde ">
        <form className="w-full flex flex-col text-lg justify-center gap-4">
          <label htmlFor="">titulo </label>
          <input
            className="p-1"
            type="text"
            placeholder="titulo"
            {...register("titulo", { required: true })}
          />

          <label htmlFor="">description </label>
          <textarea
            className="p-1"
            type="text"
            placeholder="description"
            rows={5}
            {...register("description", { required: true })}
          />

          <label htmlFor="">skills </label>
          <input
            className="p-1"
            type="text"
            placeholder="skills"
            {...register("skills", { required: true })}
          />

          <label htmlFor="">salary </label>
          <input
            className="p-1"
            type="text"
            placeholder="salary"
            {...register("salary", { required: true })}
          />

          <button className="px-2 py-1 bg-violet-800">Send</button>
        </form>
      </div>
      <Job jobInfo={job}></Job>
    </>
  );
}

export default App;
