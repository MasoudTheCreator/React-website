import React from "react";
const Title = ({text1, text2}) => {
  return (
    <>
      <div className=" text-center py-8 ">
        <div className="flex items-center gap-2 text-3xl justify-center ">
          <h1 className="text-gray-500 ">{text1}</h1>
          <h1 className="text-gray-700">{text2}</h1>
          <p className="bg-gray-700 h-0.5 w-12"></p>
        </div>
        <p className="text-gray-600 font-medium py-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
      </div>
    </>
  );
};

export default Title;
