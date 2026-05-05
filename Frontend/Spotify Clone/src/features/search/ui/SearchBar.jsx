import React from "react";
import { IoSearch } from "react-icons/io5";
import { useSearch } from "../hooks/useSearch";
import SearchContainer from "./SearchContainer";

const SearchBar = ({ ...props }) => {
  const { handleSearch, searchValue, searchResults } = useSearch();
  return (
    <div className="relative flex items-center bg-neutral-800 px-4 py-2 rounded-full w-[400px]">
      <IoSearch className="text-gray-400 text-lg mr-2" />
      <input onChange={handleSearch} {...props} />

      {searchValue ? (
        <SearchContainer searchResults={searchResults}></SearchContainer>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
