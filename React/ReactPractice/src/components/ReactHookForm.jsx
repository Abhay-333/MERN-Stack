import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(errors)
  let handleFormSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="bg-zinc-900 p-8 rounded-xl w-80 flex flex-col gap-4 shadow-lg"
      >
        <h2 className="text-white text-2xl font-semibold text-center">
          Register
        </h2>

        <input
          {...register("name", { required: "Name input field is required" })}
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 rounded bg-black border border-zinc-700 text-white focus:outline-none focus:border-green-500"
        />
        {errors.name && (
          <p className="text-red-700 leading-none text-[0.8em] font-bold">
            {errors.name.message}
          </p>
        )}

        <input
          {...register("email", { required: "Email input field is required" })}
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 rounded bg-black border border-zinc-700 text-white focus:outline-none focus:border-green-500"
        />
        {errors.email && (
          <p className="text-red-700 leading-none text-[0.8em] font-bold">
            {errors.email.message}
          </p>
        )}

        <input
          {...register("password", {
            required: "Password input field is required",
          })}
          type="password"
          name="password"
          placeholder="Password"
          className="p-2 rounded bg-black border border-zinc-700 text-white focus:outline-none focus:border-green-500"
        />
        {errors.password && (
          <p className="text-red-700 leading-none text-[0.8em] font-bold">
            {errors.password.message}
          </p>
        )}

        <input
          {...register("phone", {
            required: "Phone number input field is required",
            minLength:{
              value:10,
              message:"Min 10 digits are required",
            },
            maxLength:{
              value:10,
              message:"Max 10 digits are required",
            }
          })}
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="p-2 rounded bg-black border border-zinc-700 text-white focus:outline-none focus:border-green-500"
        />
        {errors.phone && (
          <p className="text-red-700 leading-none text-[0.8em] font-bold">
            {errors.phone.message}
          </p>
        )}

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 rounded transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
