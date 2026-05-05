import { useForm } from "react-hook-form";

export let useRHF = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return { register, handleSubmit, reset, errors };
};
