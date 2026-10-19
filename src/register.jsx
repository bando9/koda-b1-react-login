import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "./utils";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    name: "",
    email: "",
    password: "",
  });

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <div className="flex justify-center items-center flex-col mt-10 gap-10">
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-md flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="input-label">
            Nama
          </label>
          <input
            id="name"
            type="text"
            placeholder="Masukkan nama"
            {...register("name", { required: true })}
            className={`input ${errors.name ? "input-error" : "input-focus"}`}
          />
          {errors.name?.message && (
            <p className="text-xs font-medium text-rose-600">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="nama@email.com"
            {...register("email", { required: true })}
            className={`input ${errors.email ? "input-error" : "input-focus"}`}
          />
          {errors.email?.message && (
            <p className="text-xs font-medium text-rose-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            {...register("password", { required: true })}
            className={`input ${
              errors.password ? "input-error" : "input-focus"
            }`}
          />
          {errors.password?.message && (
            <p className="text-xs font-medium text-rose-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="button bg-primary text-slate-50 hover:bg-primary/80"
        >
          Simpan / Kirim
        </button>
      </form>
    </div>
  );
}
