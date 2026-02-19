import { useContext, useState } from "react";
import ThemeChanger from "./components/ThemeChanger";
import { UserDataContext } from "./context/UserContext";
import { PostDataContext } from "./context/PostContext";

const App = () => {
  // In context api we share the data from the parent to the child...
  // Interview question? is there any way that we can share the data in the reverse order i mean can we share the data from the child to the parent and yes how do we do it?

  const [theme, setTheme] = useState("light");

  const userData = useContext(UserDataContext);
  const postData = useContext(PostDataContext);
  
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  console.log(userData)
  console.log(postData)

  return (
    <div>
      <h1>This is {theme} theme.</h1>
      <ThemeChanger changeTheme={changeTheme}>
        ye konsi theme hai?
        <h1>Khud hi dek le</h1>
      </ThemeChanger>
    </div>
  );
};

export default App;