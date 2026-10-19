import { useRef, useState } from "react";
import Input from "./components/input";
import { Link } from "react-router";

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

  function handleReset() {
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
          className="button text-slate-50 bg-primary hover:bg-primary/80"
        >
          Login
        </button>

        <button
          type="click"
          onClick={handleReset}
          className="button text-black bg-primary/20 hover:bg-primary/50"
        >
          Reset
        </button>
      </form>
      <p className="mt-5">
        belum punya akun? silahkan{" "}
        <Link to="/register" className="underline hover:bg-slate-200 p-1">
          register
        </Link>
        .
      </p>
    </div>
  );
}

export default App;
