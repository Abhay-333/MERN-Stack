import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const useAuth = () => {
  const useAuthContext = useContext(AuthContext);
  return useAuthContext;
};

export default useAuth;
