import React from "react";
import { useSelector } from "react-redux";
import { store } from "../../../app/store/store";

const GlobalError = () => {
  const { error } = useSelector((store) => store);
  if (!error) return null;
  return <div className="absolute z-[999] top-0 bg-white">GlobalError</div>;
};

export default GlobalError;
