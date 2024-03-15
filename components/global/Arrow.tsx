"use client";
import React, { FC } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import clsx from "clsx";

interface ArrowBtnProps {
  arrowDirection: "up" | "down" | "left" | "right";
  className?: String;
}

const ArrowBtn: FC<ArrowBtnProps> = ({ arrowDirection, className }) => {
  const arrowMap = {
    up: <ArrowUp />,
    down: <ArrowDown />,
    left: <ArrowLeft />,
    right: <ArrowRight />,
  };

  return (
    <div
      className={clsx(
        " rounded-full text-white  bg-transaparent border border-white w-fit",
        className
      )}
    >
      {arrowMap[arrowDirection]}
    </div>
  );
};

export default ArrowBtn;
