import React from 'react'

const Title = ({myTitle, des}:props) => {
  return (
    <div className="flex flex-col gap-4 font-title mb-14">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
       {myTitle}
      </h3>
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title