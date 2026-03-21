import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const { register, handleSubmit,reset } = useForm();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form
        onSubmit={handleSubmit((data)=>{
            console.log(data)
            reset()
        })}
        className="bg-zinc-900 p-8 rounded-xl w-80 flex flex-col gap-4 shadow-lg"
      >
        <h2 className="text-white text-2xl font-semibold text-center">
          Register
        </h2>

        <input
          {...register("name")}
          type="text"
          name="name"
          placeholder="Name"
          
          className="p-2 rounded bg-black border border-zinc-700 text-white focus:outline-none focus:border-green-500"
        />

        <input
        {...register("email")}
          type="email"
          name="email"
          placeholder="Email"
          
          className="p-2 rounded bg-black border border-zinc-700 text-white focus:outline-none focus:border-green-500"
        />

        <input
        {...register("password")}
          type="password"
          name="password"
          placeholder="Password"
          
          className="p-2 rounded bg-black border border-zinc-700 text-white focus:outline-none focus:border-green-500"
        />

        <input
        {...register("phone")}
          type="tel"
          name="phone"
          //   value={inp
          placeholder="Phone Number"
          
          className="p-2 rounded bg-black border border-zinc-700 text-white focus:outline-none focus:border-green-500"
        />

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
