export const Select = ({ label }) => (
  <div className="flex flex-col gap-1 w-full">
    <label className="text-sm text-gray-500">{label}</label>
    <select className="px-4 py-2 rounded-lg bg-gray-100 focus:outline-none">
      <option>Select</option>
    </select>
  </div>
);