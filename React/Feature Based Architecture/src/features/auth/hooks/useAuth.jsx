import { useForm } from "react-hook-form";
import { useAuthContext } from "../../../context/AuthContext";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { storage } from "../../../utils/localStorage";

export const useAuth = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { registerUsers, setRegisterUsers, loggedInUser, setLoggedInUser } =
    useAuthContext();

  const handleLoginFormSubmit = (data) => {
    console.log(registerUsers);
    const matchedUser = registerUsers.find((user) => data.email === user.email);
    if (matchedUser) {
      setLoggedInUser(matchedUser);
      storage.set("loggedInUser", matchedUser);
      toast.success("User logged In Successfully");
    } else {
      toast.error("User not Found.");
    }
  };

  const handleRegisterFormSubmit = (data) => {
    const newUser = { ...registerUsers, ...data, id: nanoid() };
    setRegisterUsers(newUser);
    storage.set("registerUsers", newUser);
    toast.success("User Register successfully.");
  };

  return {
    register,
    handleSubmit,
    handleLoginFormSubmit,
    handleRegisterFormSubmit,
    reset,
    errors,
    registerUsers,
    setRegisterUsers,
    loggedInUser,
    setLoggedInUser,
  };
};
