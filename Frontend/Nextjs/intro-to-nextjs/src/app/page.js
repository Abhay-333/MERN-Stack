import Link from "next/link";
import React from "react";

const Home = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <Link key={item.id} href={`/${item.id}`}>
          <h1>{item.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Home;
