"use client";

import ArrowBtn from "@/components/global/Arrow";
import Logo from "@/components/global/Logo";
import Header from "@/components/headers";

export default function Home() {
  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center relative">
      <Header />
      <div className="w-10/12 h-5/6 glassMorphism rounded-lg shadow-xl flex items-center justify-center">
        <div className="w-10/12 flex justify-between h-full items-center">
          <Logo className="text-7xl" />
          <div className="w-1/2 flex flex-col items-center justify-center h-3/4 p-5 gap-10 ">
            <h1 className="flex items-end gap-2 text-2xl font-medium text-white">
              Login to <Logo className="text-2xl" />
            </h1>
            {/* <p className="p-3 px-5 text-center font-medium text-base text-gray-100  opacity-55">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
              alias? Numquam dicta dolorum ad!
            </p> */}

            <form action="" className="w-2/3 flex flex-col gap-7">
              <input
                type="text"
                className="bg-transparent placeholder:text-white placeholder:opacity-55 border-gray-700 focus:border-white outline-none focus:animate-pulse border p-3 px-4 w-full rounded-3xl "
                placeholder="username"
              />
              <input
                type="text"
                className="bg-transparent placeholder:text-white placeholder:opacity-55 border-gray-700 focus:border-white outline-none focus:animate-pulse border p-3 px-4 w-full rounded-3xl "
                placeholder="password"
              />

              <button className="flex items-center justify-center">
                {" "}
                <ArrowBtn arrowDirection="right" className={'p-5 !border-gray-700 hover:bg-white-trans hover:border-white hover:animate-pulse'} />
              </button>
            </form>

            <button className="w-2/3 flex p-2 transition-all duration-300 hover:bg-white-trans border border-gray-700 rounded-full justify-center items-center gap-3 text-gray-200">Let&apos;s Join <Logo className="text-lg"/></button>
          </div>
        </div>
      </div>
    </div>
  );
}
