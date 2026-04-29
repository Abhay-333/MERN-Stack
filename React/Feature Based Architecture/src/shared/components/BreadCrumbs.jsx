import React from "react";
import { Link, useLocation } from "react-router";

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const pathNames = pathname.split("/").filter((elem) => elem);
  return (
    <div>
      {pathNames.map((item) => {
        return <Link key={item} className="capitalize" to={`/${item}`}>{item} </Link>;
      })}
    </div>
  );
};

export default BreadCrumbs;
