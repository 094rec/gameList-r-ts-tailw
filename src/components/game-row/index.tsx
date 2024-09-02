import React from 'react';
import { GameImg } from '../game-img';

type GameProps = {
  category: string;
  price: string;
  name: string;
  images: string[];
  inWishList: boolean;
};

export const GameRow = ({ category, name: gameName, images, price, inWishList }: GameProps) => {
  return (
    <>
      <h2 className="text-3xl font-bold sm:text-4xl justify-center sm:justify-start pl-4">
        {category}
      </h2>
      <div className="bg-white rounded bg-opacity-10 ">
        <div className="flex gap-3 items-center">
          <h3 className="text-xl text-white/80 font-bold sm:text-2xl pl-4 p-2">{gameName}</h3>
          {inWishList && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          )}
        </div>
        <div className="flex gap-5 flex-wrap justify-center sm:justify-star">
          {images.map((img, i) => (
            <GameImg img={img} />
          ))}
        </div>
        <div className="m-2 my-3">
          <span className="bg-blue-900 p-3 py-2 text-white/90 bg-opacity-80 rounded">{price}</span>
        </div>
      </div>
    </>
  );
};
