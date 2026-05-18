// Todo Card Component
const TodoCard = ({ todo, handleDelete, handleUpdate }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-md flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-2">{todo.taskName}</h2>

        <p className="text-zinc-300 mb-4">{todo.description}</p>

        <div className="text-sm text-zinc-500 flex flex-col gap-1 mb-5">
          <span>Created: {new Date(todo.createdAt).toLocaleString()}</span>

          <span>Updated: {new Date(todo.updatedAt).toLocaleString()}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => handleUpdate(todo)}
          className="flex-1 bg-yellow-500 hover:bg-yellow-600 transition-all py-2 rounded-lg font-semibold cursor-pointer"
        >
          Update
        </button>

        <button
          onClick={() => handleDelete(todo._id)}
          className="flex-1 bg-red-600 hover:bg-red-700 transition-all py-2 rounded-lg font-semibold cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
