export default function Input({ name, type, label, ph, ...ref }) {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="username">{label}</label>
      <input
        className="p-2 pl-3 border-2 border-slate-300 rounded-xl"
        placeholder={ph}
        id={name}
        name={name}
        type={type}
        required
        {...ref}
      />
    </div>
  );
}
