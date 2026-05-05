export const Card = ({ title, subtitle, children }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4">
    <div>
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
    {children}
  </div>
);
