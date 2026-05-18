import { useState } from "react";
import { useDispatch } from "react-redux";
import { createList } from "../app/actions/listSlice";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/lists";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    taskName: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.taskName || !formData.description) return;

    // addTodo(formData);
    const res = await axios.post(`${API_BASE_URL}/create`, formData);
    dispatch(createList(res.data.lists));
    setFormData({
      taskName: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl bg-zinc-900 p-6 rounded-2xl shadow-lg flex flex-col gap-4"
    >
      <h1 className="text-3xl font-bold text-center">Todo Form</h1>

      <input
        type="text"
        name="taskName"
        placeholder="Enter Task Name"
        value={formData.taskName}
        onChange={handleChange}
        className="border border-zinc-700 bg-zinc-800 px-4 py-3 rounded-lg outline-none focus:border-blue-500"
      />

      <textarea
        name="description"
        placeholder="Enter Description"
        value={formData.description}
        onChange={handleChange}
        rows="4"
        className="border border-zinc-700 bg-zinc-800 px-4 py-3 rounded-lg outline-none focus:border-blue-500 resize-none"
      ></textarea>

      <button className="bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-lg font-semibold cursor-pointer">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
