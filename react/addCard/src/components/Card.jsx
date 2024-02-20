import { useState } from "react";

export const Card = ({cardData}) => {
  
  const {
  imgSrc,
  fullName,
  location,
  description,
  github,
  linkedin,
  frontend,
  twitter,
  instagram
} = cardData
console.log(typeof cardData.imgSrc)

  return (
    <div className="bg-slate-700 w-96 m-2 p-3 rounded-lg drop-shadow-xl">
      <div className=" mx-auto flex flex-col items-center gap-2 pt-3">
        <img className="w-20 rounded-full" src={imgSrc} alt="" />
        <h3 className="text-2xl">{fullName}</h3>
        <h6 className="text-lime-400 text-sm">{location}</h6>
        <p className="text-xs mt-3 mb-2">{description}</p>
      </div>
      <div className="flex flex-col items-center">
        {github && (
          <button className=" w-48 px-2 py-3 bg-slate-600 rounded-lg m-2">
            GitHub
          </button>
        )}
        {linkedin ? (
          <button className=" w-48 px-2 py-3 bg-slate-600 rounded-lg m-2">
            Linkedin
          </button>
        ) : null}
        {frontend && (
          <button className=" w-48 px-2 py-3 bg-slate-600 rounded-lg m-2">
            Frontend Mentor
          </button>
        )}
        {twitter && (
          <button className=" w-48 px-2 py-3 bg-slate-600 rounded-lg m-2">
            Twitter
          </button>
        )}
        {instagram ? (
          <button className=" w-48 px-2 py-3 bg-slate-600 rounded-lg m-2">
            Instagram
          </button>
        ) : null}
      </div>
    </div>
  );
};
