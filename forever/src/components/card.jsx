import React from "react";
const Card = ({ el }) => {
  return (
    <>
    <div>

      <div className="cursor-pointer overflow-hidden hover:shadow-md">
        <img src={el.image[0]} className="hover:scale-105  transform duration-200" />
      </div>
      <div className="pt-3 pb-1">{el.name}</div>
      <div className="text-green-800">${el.price}</div>
    </div>
    </>
  );
};

export default Card;
