import React from "react";

function Card() {
  return (
    <div className="bg-zinc-800 p-4 flex flex-col rounded-lg text-white items-center">
      <img src="" alt="" />
      <h3>nombre</h3>
      <h4>locacion</h4>
      <p>abstract</p>
      <div className="flex flex-col gap-4 my-4">
        <button className="bg-zinc-500 rounded-lg py-1 px-8">button01</button>
        <button className="bg-zinc-500 rounded-lg py-1 px-8">button02</button>
        <button className="bg-zinc-500 rounded-lg py-1 px-8">button03</button>
        <button className="bg-zinc-500 rounded-lg py-1 px-8">button04</button>
        <button className="bg-zinc-500 rounded-lg py-1 px-8">button05</button>
      </div>
    </div>
  );
}

export default Card;

