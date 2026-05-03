import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../app/store/store";
import { useRef } from "react";

export const useDashboard = () => {
  const dispatch = useDispatch();
  return {
    dispatch,
  };
};
