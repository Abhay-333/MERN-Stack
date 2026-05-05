function Card({ imgUrl, userName, description, role, onRemove }) {


  return (
    <div className="w-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl text-white p-6 flex flex-col items-center hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
      {/* Avatar */}
      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-emerald-500 shadow-md">
        <img
          src={imgUrl}
          alt={userName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-center">
        {userName}
      </h2>

      {/* Role */}
      <span className="mt-1 px-4 py-1 text-sm rounded-full bg-emerald-500 text-black font-semibold">
        {role}
      </span>

      {/* Description */}
      <p className="mt-4 text-sm text-slate-300 text-center leading-relaxed">
        {description}
      </p>

      <button
      type="button"
        onClick={onRemove}
        className="mt-6 w-full py-2 rounded-lg bg-red-500/90 hover:bg-red-600 transition-colors text-sm font-semibold"
      >
        Remove
      </button>
    </div>
  );
}

export default Card;
