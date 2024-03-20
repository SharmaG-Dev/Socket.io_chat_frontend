"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import ArrowBtn from "../global/Arrow";
import { loginUser } from "@/store/slices/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginFormdataProps } from "@/types/auth";
import { Formik } from "formik";

export default function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.auth);

  const handleLogin = async (values: any) => {
    await dispatch(loginUser(values));
  };

  const initialValues: LoginFormdataProps = {
    username: "",
    password: "",
  };

  useEffect(() => {
    if (isAuthenticated.isAuthenticate) {
      router.push("/dashboard", { scroll: false });
    }
  }, [isAuthenticated, router]);

  return (
    <Formik initialValues={initialValues} onSubmit={handleLogin}>
      {({ values, handleChange, handleSubmit }) => (
        <form className="w-2/3 flex flex-col gap-7" onSubmit={handleSubmit}>
          <input
            type="text"
            className="bg-transparent text-white placeholder:text-white placeholder:opacity-55 border-gray-700 focus:border-white outline-none focus:animate-pulse border p-3 px-4 w-full rounded-3xl"
            placeholder="Username"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <input
            type="password"
            className="bg-transparent text-white placeholder:text-white placeholder:opacity-55 border-gray-700 focus:border-white outline-none focus:animate-pulse border p-3 px-4 w-full rounded-3xl"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />

          <button type="submit" className="flex items-center justify-center">
            <ArrowBtn
              arrowDirection="right"
              className={`p-5 !border-gray-700 ${
                isAuthenticated.isLoading && "animate-ping"
              } hover:bg-white-trans  hover:border-white hover:animate-pulse`}
            />
          </button>
        </form>
      )}
    </Formik>
  );
}
