import { Activity, useContext, useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Form from "./components/Form";
import ReactHookForm from "./components/ReactHookForm";
import WeatherApi from "./components/WeatherApi";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Theme } from "./context/ThemeContext";
import ProductList from "./components/Dashboard1/ProductList";
import axios from "axios";
import Dashboard1 from "./components/Dashboard1/Dashboard1";

function App() {
  //State lifting up ka matlab hai ki grandparent pe hum state/data rakte hai aur usse hi hum aage pass krte hai as props to different childrens and grand childrens

  const [users, setUsers] = useState(null);
  const [products, setProducts] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get(`https://fakestoreapi.com/users`);
    setUsers(res.data);
  };

  const fetchProducts = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products`);
    setProducts(res.data);
  };

  useEffect(() => {
    if (users && products) {
      fetchUsers();
      fetchProducts();
    }
  }, [users, products]);

  // const [toggle, settoggle] = useState(false);

  const { theme } = useContext(Theme);
  return (
    <div
      className={`${theme === "light" ? "bg-zinc-900 text-white" : "bg-white text-black"} h-full`}
    >
      {/* <h1>this is app</h1> */}
      {/* ye activity container hota hai jo acha hota hai conditional rendering ke liye. Jo hum ternary operator se hum conditional rendering krte hai vo agar ek condition true ho ja rahi hai toh vo ek hi DOM tree ko rakta hai jo condition false hai usse vo remove krdeta hai, toh agar hume kuch aisa chahiye jab dono dom tree should be present but it should not be visible then we should this Activity container*/}

      {/* <Activity mode={toggle ? "visible" : "hidden"}>
        <About settoggle={settoggle}></About>
      </Activity>

      <Activity mode={!toggle ? "visible" : "hidden"}>
        <Contact settoggle={settoggle}></Contact>
      </Activity> */}

      {/* <Form></Form> */}
      {/* yaha pe optimized techinque use ki hai for for handling, jo useState se honi wali re-rendering ho kafi kum kr deghi*/}

      {/* <ReactHookForm/> */}

      {/* <WeatherApi/> */}
      <Dashboard1 products={products} setProducts={setProducts} />
      {/* from this we can send props through parent to child and from child to parent through making functions*/}
      <ProductList products={products} setProducts={setProducts} />

      {/* <Navbar /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
