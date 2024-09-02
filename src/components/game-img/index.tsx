import React from 'react';

type Props = {
  img: string;
};

export const GameImg = ({ img }: Props) => {
  return (
    <>
      <img
        className="rounded w-11/12 sm:w-4/6 md:w-[240px] md:h-[150px] transition-transform hover:scale-150 cursor-pointer"
        src={img}
        alt=""
        loading="lazy"
      />
    </>
  );
};
