import React from "react";
import { Link, useLocation } from "react-router";

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const pathNames = pathname.split("/").filter((elem) => elem);
  console.log(pathNames);
  return (
    <div>
      {pathNames.map((item) => {
        console.log(item)
        return <Link className="capitalize" to={`/${item}`}>{item} </Link>;
      })}
    </div>
  );
};

export default BreadCrumbs;
