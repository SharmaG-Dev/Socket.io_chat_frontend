import ArrowBtn from "../global/Arrow";

export default function Login() {
  return (
    <form action="" className="w-2/3 flex flex-col gap-7">
      <input
        type="text"
        className="bg-transparent text-white placeholder:text-white placeholder:opacity-55 border-gray-700 focus:border-white outline-none focus:animate-pulse border p-3 px-4 w-full rounded-3xl "
        placeholder="Username"
      />
      <input
        type="text"
        className="bg-transparent text-white placeholder:text-white placeholder:opacity-55 border-gray-700 focus:border-white outline-none focus:animate-pulse border p-3 px-4 w-full rounded-3xl "
        placeholder="Password"
      />

      <button className="flex items-center justify-center">
        {" "}
        <ArrowBtn
          arrowDirection="right"
          className={
            "p-5 !border-gray-700 hover:bg-white-trans hover:border-white hover:animate-pulse"
          }
        />
      </button>
    </form>
  );
}
