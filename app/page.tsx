"use client";

import PostCard from "@/components/Post";
import Login from "@/components/auth/Login";
import SignUp from "@/components/auth/Signup";
import Logo from "@/components/global/Logo";
import { useQRCode } from "@/context/useQrcode";
import { useEffect, useState } from "react";
import Atropos from "atropos/react";
import "atropos/css";
import { useAppDispatch } from "@/hooks/storeHooks";
import { findSelfData } from "@/store/slices/auth";

export default function Home() {
  const { generateQRCode, qrCodeImageUrl } = useQRCode();
  const [login, setLogin] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findSelfData());
  }, []);

  
  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center relative">
      <div className="w-full h-full glassMorphism rounded-lg shadow-xl flex items-center justify-center">
        <div className="w-10/12 flex justify-evenly h-full items-center">
          <div className="flex flex-col items-center gap-10 w-1/2">
            <h1 className="text-gray-300">
              Welcome to <Logo className="text-6xl" />
            </h1>
            <p className="text-white font-medium text-center">
              Dev.Chat: Connect with Your Developer Community and Get Solutions
              Instantly
            </p>
            <div className="flex items-center gap-6">
              <Atropos highlight={false} shadow={false}>
                <PostCard
                  category="backend"
                  className="h-2/4 "
                  imageStatus={false}
                  commentsCount={34}
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex saepe, fuga sed harum officiis nesciunt qui inventore "
                  imageUrl="/assets/img/typescript2.jpeg"
                  timeAgo="16 min"
                  title="Let Build the Typescript Node Server With Pro Structure"
                />
              </Atropos>
              <Atropos highlight={false} shadow={false}>
                <PostCard
                  category="devops"
                  className="h-2/4"
                  commentsCount={34}
                  imageStatus={false}
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex saepe, fuga sed harum officiis nesciunt qui inventore "
                  imageUrl="/assets/img/javascript2.jpg"
                  timeAgo="16 min"
                  title="Let Build the Typescript Node Server With Pro Structure"
                />
              </Atropos>
            </div>
          </div>

          {/* <Logo className="text-7xl" /> */}
          <div className="w-1/2 flex flex-col items-center justify-center h-3/4 p-5 gap-10 ">
            <h1 className="flex items-end gap-2 text-2xl font-medium text-white">
              {!login ? "Login" : "Join"} to <Logo className="text-2xl" />
            </h1>
            {!login ? <Login /> : <SignUp />}
            <button
              onClick={() => setLogin(!login)}
              className="w-2/3 flex p-2 transition-all duration-300 hover:bg-white-trans border border-gray-700 rounded-full justify-center items-center gap-3 text-gray-200"
            >
              {!login ? "Let's Join" : "Log in To"} <Logo className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
