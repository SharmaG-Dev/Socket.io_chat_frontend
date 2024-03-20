"use client";
import React, { FC, useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import menuData from "./Menu";
import { usePathname, useRouter } from "next/navigation";
import { User } from "@/types/auth";
import { LogOut } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { findSelfData, logoutUser } from "@/store/slices/auth";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  function handleLogout() {
    dispatch(logoutUser());
    router.push("/");
  }

  const data: any = useAppSelector((state) => state.auth.data);
  useEffect(() => {
    dispatch(findSelfData());
  }, []);

  const pathname = usePathname();
  return (
    <header className=" w-full px-4  flex  justify-between items-center z-10 top-0 left-0 ">
      <div></div>
      <nav>
        <ul className="block lg:flex lg:space-x-12">
          {menuData.map((menuItem, index) => (
            <li key={index} className="group relative">
              {menuItem.path ? (
                <Link
                  href={menuItem.path}
                  className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                    pathname === menuItem.path
                      ? "text-teal-500 dark:text-white font-medium"
                      : "text-gray-300 hover:text-white  dark:text-white/70 dark:hover:text-white"
                  }`}
                >
                  {menuItem.title}
                </Link>
              ) : (
                <>
                  <p
                    onClick={() => {
                      handleSubmenu(index);
                      return null;
                    }}
                    className="flex cursor-pointer items-center justify-between py-2 text-base text-gray-300 group-hover:text-white dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                  >
                    {menuItem.title}
                    <span className="pl-3">
                      <svg width="25" height="24" viewBox="0 0 25 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </p>
                  <div
                    className={`submenu relative left-0 top-full bg-gray-700 rounded-lg  transition-[top] duration-300 group-hover:opacity-100  lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  >
                    {menuItem?.submenu?.map(
                      (submenuItem: any, subIndex: number) => (
                        <Link
                          href={submenuItem?.path as string}
                          key={subIndex}
                          className="block rounded py-2.5 text-sm text-gray-300 font-medium hover:bg-white hover:text-gray-900 hover:text-primary dark:hover:bg-gray-600 dark:text-light dark:hover:text-white lg:px-3"
                        >
                          {submenuItem.title}
                        </Link>
                      )
                    )}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-3 items-center">
        <div className="flex flex-col">
          <h5 className="font-medium text-white text-base">{data?.name}</h5>
          <h6 className="font-light text-xs text-gray-400">
            @{data?.username}
          </h6>
        </div>
        <button
          onClick={handleLogout}
          className="p-3 border border-gray-700 text-gray-700 rounded-full group animate-pulse cursor-pointer"
        >
          <LogOut className="text-white group-hover:text-gray-500" />
        </button>
      </div>
      {/* <ThemeToggler /> */}
    </header>
  );
};

export default Header;
