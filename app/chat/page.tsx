"use client";
import Message from "@/components/Message";
import ChatHeads from "@/components/chatHeads";
import { useSocket } from "@/context/useSocket";
import moment from "moment";
import { useEffect, useState } from "react";

interface MessageProps {
  createdAt: string;
  message: string;
  read: boolean;
  receiver: string;
  sender: string;
  updatedAt: string;
  _id: string;
}
export default function Chat() {
  const socket = useSocket();
  const [currentuser, setCurrentUser] = useState<string | null>(null);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [users, setUsers] = useState<[] | null | any>(null);
  const [message, setMessages] = useState<[]>([]);
  const [inputMsg, setInputMsg] = useState<string | "">("");

  function ConnectNewUser() {
    const UniqueId = window.prompt("enter your number or name :");
    if (UniqueId) {
      socket?.emit("new-user", UniqueId);
      setCurrentUser(UniqueId);
      sessionStorage.setItem("user", UniqueId);
    }
  }

  function sendMsg({
    sender,
    reciver,
    message,
  }: {
    sender: string | null;
    reciver: string | null;
    message: string | null;
  }) {
    if (!sender && !reciver && !message) {
      window.alert("provider the sender, reciver and message ");
    }
    const msgObj = {
      sender: sender,
      message: message,
      reciver: reciver,
    };
    socket?.emit("send-message", JSON.stringify(msgObj));
    socket?.emit("message", JSON.stringify({ user: currentuser }));
    setInputMsg("");
  }

  useEffect(() => {
    socket?.on("users", (data) => {
      const values = Object.values(data);
      setUsers(values);
      console.log(values);
    });
    if (currentuser) {
      socket?.on(`message:${currentuser}-${activeChat}`, (data) => {
        setMessages(data.data);
        console.log(data.data);
      });
    }
  }, [socket, currentuser, activeChat]);

  useEffect(() => {
    if (currentuser && activeChat) {
      socket?.emit(
        "message",
        JSON.stringify({ sender: currentuser, reciver: activeChat })
      );
    }
  }, [socket, currentuser, activeChat]);
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-12 bg-teal-700 flex justify-evenly items-center text-xl uppercase font-semibold text-white">
        Dev.Chat
        <button
          className="p-2 px-5 border rounded-lg font-normal text-sm"
          onClick={ConnectNewUser}
        >
          {" "}
          {currentuser === null ? "connect" : currentuser}
        </button>
      </div>
      <div className="sm:w-full md:w-9/12 xl:w-10/12 flex">
        {/* sidebar */}
        <div className="w-3/12  h-head-section max-h-head-section overflow-y-auto scroll-smooth p-2 flex flex-col gap-3">
          {users
            ?.filter((x: string) => x !== currentuser)
            ?.map((item: string, index: number) => (
              <div key={index} onClick={() => setActiveChat(item)}>
                <ChatHeads
                  name={item}
                  status={true}
                  active={activeChat === item}
                />
              </div>
            ))}
        </div>
        <div className="w-9/12 border-r border-l h-head-section p-3 max-h-head-section overflow-y-auto">
          {message?.map((item: MessageProps, index: number) => (
            <Message
              key={index}
              message={item?.message}
              user={item.sender === currentuser}
              date={moment(item.createdAt).format("LT")}
            />
          ))}
          {/* <Message message="hello Badhiya Hu bhai" user={false} date="10 may" /> */}
        </div>
      </div>
      <div className="sm:w-full md:w-9/12 xl:w-10/12 flex gap-2">
        <input
          type="text"
          placeholder="typing..."
          value={inputMsg}
          className="p-2 px-3 border-2 border-teal-700 rounded-lg placeholder:text-teal-800 w-full"
          onChange={(e) => setInputMsg(e.target.value)}
        />
        <button
          className="p-2 px-5 bg-gray-800 text-white rounded-lg"
          onClick={() =>
            sendMsg({
              sender: currentuser,
              reciver: activeChat,
              message: inputMsg,
            })
          }
        >
          {" "}
          send
        </button>
      </div>
    </div>
  );
}
