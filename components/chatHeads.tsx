interface ChatHeadsProps {
  name: string;
  status: boolean;
  active: boolean;
}

export default function ChatHeads({ name, status, active }: ChatHeadsProps) {
  return (
    <div
      className={`flex flex-col p-3 border rounded-lg cursor-pointer hover:shadow-lg transition-shadow ${
        active ? "bg-gray-200" : "bg-white"
      }`}
    >
      <h5 className="text-base">{name}</h5>
      <h6 className={`text-sm ${status ? "text-green-600" : "text-red-700"}`}>
        {status ? "Online" : "Offline"}
      </h6>
    </div>
  );
}
