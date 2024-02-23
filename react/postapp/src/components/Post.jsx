import React from "react";

export default function Post({image,title,description}) {
  return (
    <div className="mt-10 grid gap-8">
      <img
        src={image}
        alt=""
        className="object-cover h-60 w-full"
      />
      <br />

      <h1 className="text-5xl text-center">{title}</h1>

      <p className="text-2xl">{description}</p>
    </div>
  );
}
