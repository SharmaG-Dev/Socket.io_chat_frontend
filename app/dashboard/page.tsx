"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { logoutUser } from "@/store/slices/auth";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const isAuthenticated = useAppSelector((state) => state.auth);
  const data: any = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();
  const router = useRouter();

  function handleLogout() {
    dispatch(logoutUser());
    router.push("/");
  }

  return <div className="w-full h-screen "></div>;
}
