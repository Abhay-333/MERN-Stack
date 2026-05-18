// App.jsx
import "./index.css";
import TodoForm from "./components/TodoForm";
import TodoCard from "./components/TodoCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { deleteList, updateList } from "./app/actions/listSlice";

const API_BASE_URL = "http://localhost:3000/api/lists";

const App = () => {
  const { lists } = useSelector((store) => store.lists);
  const dispatch = useDispatch();

  const handleUpdate = async (clickedList) => {
    const updatedInfo = prompt("You can only edit description");
    if (!updatedInfo) return;

    const res = await axios.put(
      `${API_BASE_URL}/update/${clickedList._id}`,
      { description: updatedInfo },
    );

    dispatch(updateList(res.data.updateList));
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_BASE_URL}/delete/${id}`);
    dispatch(deleteList(id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white ">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <TodoForm />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lists.map((todo) => (
            <TodoCard
              key={todo._id}
              todo={todo}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
