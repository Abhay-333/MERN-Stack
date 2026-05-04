import { useState } from "react";
import { allSongs } from "../../../utils/songs";

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  let timer;
  const handleSearch = (e) => {
    let value = e.target.value;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setSearchValue(value);

      const filterSongs = allSongs.filter((song) =>
        song.title.toLowerCase().includes(value.toLowerCase()),
      );
      console.log("reasdlas");
      setSearchResults(filterSongs);
    }, 800);
  };
  return { handleSearch, searchValue, searchResults };
};
