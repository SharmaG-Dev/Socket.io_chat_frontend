"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { PostCategory } from "./themes/Category";

interface PostCardProps {
  imageUrl: string;
  title: string;
  imageStatus?: boolean;
  description: string;
  category: string;
  timeAgo: string;
  commentsCount: number;
  imgWidth?: number;
  imgHeight?: number;
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  imageUrl,
  imageStatus,
  title,
  description,
  imgWidth,
  imgHeight,
  category,
  timeAgo,
  commentsCount,
  className,
}) => {
  const newHeight = imgHeight ? imgHeight : 500;
  const newWidth = imgWidth ? imgWidth : 500;

  return (
    <div
      className={clsx(
        "rounded-lg overflow-hidden shadow-lg flex flex-col border border-gray-700 p-2",
        className
      )}
      draggable
    >
      <div className="relative">
        {imageStatus
          ? imageStatus &&
            true && (
              <Image
                className="rounded w-full"
                src={imageUrl}
                width={newWidth}
                height={newHeight}
                priority
                alt="Post"
              />
            )
          : null}
        <div className="w-full flex bg-transparent justify-between py-1.5">
          <div className="text-xs text-green-500 font-semibold py-1.5 px-2.5 ">
            Solved
          </div>
          <div
            className={clsx(
              `text-xs  top-0 right-0 transition-colors ${PostCategory[category]} capitalize px-2.5 py-1.5 text-white hover:text-white hover:${PostCategory[category]}  rounded-sm`
            )}
          >
            {category}
          </div>
        </div>
      </div>

      <div className="px-3 py-4 mb-auto ">
        <a
          href="#"
          className="font-medium text-lg text-white inline-block hover:text-indigo-600 transition duration-500 ease-in-out  mb-2"
        >
          {title}
        </a>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <div className="px-2.5 py-3 flex flex-row items-center justify-between">
        <span className="py-1 text-xs font-regular text-gray-400 mr-1 flex flex-row items-center">
          {/* item icon */}
          <span className="ml-1">{timeAgo}</span>
        </span>

        <span className="py-1 text-xs font-regular text-gray-400 mr-1 flex flex-row items-center">
          <svg
            className="h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <span className="ml-1">{commentsCount} Comments</span>
        </span>
      </div>
    </div>
  );
};

export default PostCard;
