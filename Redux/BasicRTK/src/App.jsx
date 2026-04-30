import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counterSlice";

function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.count); //hook for subscribtion
  console.log(count);

  return (
    <>
      <h1>Count is - {count}</h1>
      <button onClick={() => dispatch(increment())}>Incre</button>
      <button onClick={() => dispatch(decrement())}>Decre</button>
    </>
  );
}

export default App;
