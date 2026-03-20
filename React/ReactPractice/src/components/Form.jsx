import { useRef, useState } from "react";

const Form = () => {
  let inpRef = useRef({});
  console.log(inpRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inpRef.current.name.value);
    console.log(inpRef.current.email.value);
    console.log(inpRef.current.password.value);
    console.log(inpRef.current.phone.value);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl w-80 flex flex-col gap-4 shadow-lg"
      >
        <h2 className="text-white text-2xl font-semibold text-center">
          Register
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          ref={(e) => (inpRef.current.name = e)}
          className="p-2 rounded bg-black border border-zinc-700 text-white focus:outline-none focus:border-green-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={(e) => (inpRef.current.email = e)}
          className="p-2 rounded bg-black border border-zinc-700 text-white focus:outline-none focus:border-green-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={(e) => (inpRef.current.password = e)}
          className="p-2 rounded bg-black border border-zinc-700 text-white focus:outline-none focus:border-green-500"
        />

        <input
          type="tel"
          name="phone"
        //   value={inpRef.current.phone.value}
          placeholder="Phone Number"
          ref={(e) => (inpRef.current.phone = e)}
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

export default Form;
