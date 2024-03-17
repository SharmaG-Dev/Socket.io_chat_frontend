"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import ArrowBtn from "../global/Arrow";
import { loginUser } from "@/store/slices/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LoginFormdataProps } from "@/types/auth";

export default function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState<LoginFormdataProps>({
    username: "",
    password: "",
  });


  const handleLogin = async () => {
    await dispatch(
      loginUser({ username: "abhishek_sharma", password: "12345678" })
    );
  };

  useEffect(() => {
    if (isAuthenticated.isAuthenticate) {
      router.push("/chat", { scroll: false });
    }
  }, [isAuthenticated, router]);

  return (
    <form
      className="w-2/3 flex flex-col gap-7"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        className="bg-transparent text-white placeholder:text-white placeholder:opacity-55 border-gray-700 focus:border-white outline-none focus:animate-pulse border p-3 px-4 w-full rounded-3xl"
        placeholder="Username"
      />
      <input
        type="password" 
        className="bg-transparent text-white placeholder:text-white placeholder:opacity-55 border-gray-700 focus:border-white outline-none focus:animate-pulse border p-3 px-4 w-full rounded-3xl"
        placeholder="Password"
      />

      <button
        type="submit"
        className="flex items-center justify-center"
        onClick={handleLogin}
      >
        <ArrowBtn
          arrowDirection="right"
          className={`p-5 !border-gray-700 ${isAuthenticated.isLoading && "animate-spin"} hover:bg-white-trans hover:border-white hover:animate-pulse`}
        />
      </button>
    </form>
  );
}
