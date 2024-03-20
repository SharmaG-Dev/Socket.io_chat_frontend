"use client";

import Header from "@/components/headers";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { findSelfData, logoutUser } from "@/store/slices/auth";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const isAuthenticated = useAppSelector((state) => state.auth);
  const data: any = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();
  const router = useRouter();

  function handleLogout() {
    dispatch(logoutUser());
    router.push("/");
  }

  useEffect(() => {
    dispatch(findSelfData());
  }, []);

  return (
    <div className="w-full h-screen">
      <Header user={data} />
    </div>
  );
}
