export default function Input({ label, rules, register,  ...props }) {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-bold tracking-[0.22em] text-slate-700 uppercase">
        {label}
      </label>
      <div className="flex items-center gap-3 rounded-2xl bg-[#f4f6fb] px-4 py-4">
        <input
          {...props}
          {...register(label,rules)}
          className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none"
        />
      </div>
    </div>
  );
}
