import React from 'react';

type Props = {
  val: string;
  setVal: React.Dispatch<React.SetStateAction<string>>;
  setFav: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchBar = ({ val, setVal, setFav }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const clearInput = () => {
    setVal('');
    inputRef.current?.focus();
  };

  return (
    <>
      <header className="sticky top-0 z-10 flex justify-center items-center">
        <form className="mb-8 relative">
          <svg
            className="size-7 absolute text-gray-400 top-2 left-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            ref={inputRef}
            className="bg-blue-950 p-2.5 pl-9 w-[180px] mr-8 text-white/90 rounded"
            onChange={(e) => setVal(e.target.value)}
            value={val}
            type="text"
            placeholder="Search..."
          />
          {val && (
            <svg
              onClick={clearInput}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 top-1/2 left-36 text-gray-400 absolute transform -translate-y-1/2 cursor-pointer"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          )}

          <label className="text-sm whitespace-nowrap hidden sm:inline">
            <input
              // onClick={() => setFav((prev) => !prev)}
              onChange={(e) => setFav(e.target.checked)}
              type="checkbox"
              className="rounded-full mr-1"
            />
            Fav
          </label>
        </form>
      </header>
    </>
  );
};
