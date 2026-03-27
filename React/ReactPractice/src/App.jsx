import { Activity, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Form from "./components/Form";
import ReactHookForm from "./components/ReactHookForm";
import WeatherApi from "./components/WeatherApi";

function App() {
  // const [toggle, settoggle] = useState(false);
  
  return (
    <>
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
      
      <WeatherApi/>
    </>
  );
}

export default App;
