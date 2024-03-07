interface MessageProps {
  message: string;
  date: string;
  seen?: string;
  user: boolean;
}

export default function Message({ message, date, seen, user }: MessageProps) {
  return (
    <div
      className={`${
        user
          ? "float-right clear-both bg-gray-200 text-gray-800"
          : "float-left clear-both bg-teal-200 text-gray-800"
      } p-3 rounded-lg my-2`}
    >
      <h5 className="text-base">{message}</h5>
      <div>
        <h6 className={`text-xs font-light text-gray-500 ${user ? "float-right clear-both" :"float-left clear-both"}`}>{date}</h6>
        <h6 className="text-xs">{seen}</h6>
      </div>
    </div>
  );
}
