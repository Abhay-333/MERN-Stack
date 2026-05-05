import React from "react";
import About from "./components/About";
import { useState } from "react";
import { useCallback } from "react";
import { useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    userName: "Abhay",
    id: 1,
  });
  console.log("app rendering...");

  // useCallback() hook ye kya krta hai greet func ka reference hold krke rakta hai. jo baar baar memory address change ho raha tha na toh usse bach ne ke liye ye use hota hai
  const greet = useCallback(() => {
    console.log("hello");
  }, []); // iska syntax useEffect jaisa hota hai matlab yaha pe hum ek dependency array pass krte hai jis mey hum vo values pass krte hai jo change hone pe hume greet ka reference change krna hai

  // const heavyCalc = () => {
  //   console.log("heavyCalc going on...");
  //   for (let i = 0; i < 1000000000; i++) {}
  // };
  // heavyCalc(); ye function jab bhi chalega toh bohot hi lag hoga toh iss chiz se bachne ke liye hum use krte hai useMemo

  const heavyCalc = useMemo(() => {
    // ab heavyCalc will be considered as a value
    console.log("heavyCalc going on...");
    for (let i = 0; i < 1000000000; i++) {}
  }, []);

  return (
    <div>
      App
      {count}
      {user.userName}
      {heavyCalc}
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button
        onClick={() => setUser((prev) => ({ ...prev, userName: "Rahul" }))}
      >
        Change Name
      </button>
      <About greet={greet} count={count} user={user}></About>
    </div>
  );
};

export default App;
