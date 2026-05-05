import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export let useAuthContext = () => useContext(AuthContext);
