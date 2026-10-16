import { useRef, useState } from "react";
import Input from "./components/input";

function App() {
  const [username, setUsername] = useState("");
  const passwordRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const password = passwordRef.current.value;

    if (username == "admin" && password == "admin123") {
      alert("Login berhasil");
    } else {
      alert("username dan password salah");
    }

    setUsername("");
    passwordRef.current.value = "";
  }

  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <h1 className="text-xl">Login</h1>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <Input
          name="username"
          type="text"
          value={username}
          ph="input username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          name="password"
          type="password"
          ph="********"
          ref={passwordRef}
        />

        <button
          type="submit"
          className="border-2 bg-slate-400 border-none px-4 py-2 rounded-xl w-full text-slate-50 hover:bg-slate-500 cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
