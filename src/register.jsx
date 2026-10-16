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
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Nama
          </label>
          <input
            id="name"
            type="text"
            placeholder="Masukkan nama"
            {...register("name", { required: true })}
            className={`rounded-lg border px-3.5 py-2 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:outline-none ${
              errors.name
                ? "border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                : "border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            }`}
          />
          {errors.name?.message && (
            <p className="text-xs font-medium text-rose-600">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="nama@email.com"
            {...register("email", { required: true })}
            className={`rounded-lg border px-3.5 py-2 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:outline-none ${
              errors.email
                ? "border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                : "border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            }`}
          />
          {errors.email?.message && (
            <p className="text-xs font-medium text-rose-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            {...register("password", { required: true })}
            className={`rounded-lg border px-3.5 py-2 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:outline-none ${
              errors.password
                ? "border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                : "border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
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
          className="mt-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 active:scale-[0.98] transition-all cursor-pointer"
        >
          Simpan / Kirim
        </button>
      </form>
    </div>
  );
}
