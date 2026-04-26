import { useForm } from "react-hook-form";
import { useAuthContext } from "../../../shared/hooks/useAuthContext";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { storage } from "../../../utils/localStorage";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { registerUsers, setRegisterUsers, loggedInUser, setLoggedInUser } =
    useAuthContext();

  const handleLoginFormSubmit = (data) => {
    console.log(registerUsers);
    const matchedUser = registerUsers.find((user) => data.email === user.email);

    if (matchedUser) {
      setLoggedInUser(matchedUser);
      storage.set("loggedInUser", matchedUser);
      toast.success("User logged In Successfully");
      navigate("/dashboard");
    } else {
      toast.error("User not Found.");
    }
  };

  const handleRegisterFormSubmit = (data) => {
    const newUser = { ...data, id: nanoid() };
    const updatedUsers = [...registerUsers, newUser];
    setRegisterUsers(updatedUsers);
    storage.set("registerUsers", updatedUsers);
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
