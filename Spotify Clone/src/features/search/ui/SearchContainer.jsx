import React from "react";

const SearchContainer = ({ searchResults }) => {
  //   console.log(searchResults);
  return (
    <div className="absolute flex flex-col overflow-auto gap-4 z-90 top-[100%] left-[0%] rounded-xl p-3 w-full bg-[#121212]  text-white">
      {searchResults.map((song) => (
        <div className="">
          <h1 key={song.url}>{song.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default SearchContainer;
