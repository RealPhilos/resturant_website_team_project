"use client";

import { AuthContext } from "@/app/providers/auth";
import { useContext } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { user } = useContext(AuthContext);
  const { toast } = useToast();
  const router = useRouter();

  const getRandomEmoji = () => {
    const emojis = ["👍", "👋", "🫡"];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const handleReturn = (e) => {
    e.preventDefault(); // Prevent default link behavior

    const emoji = getRandomEmoji();

    toast({
      title: `Exited Dashboard`,
      description: "Your have successful!y exited the dashboard!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    setTimeout(() => {
      router.push("/");
    }, 10);
  };

  console.log(user);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg hover:shadow-2xl rounded-lg p-8 m-4 w-full max-w-2xl transition duration-300 transform hover:scale-105 cursor-pointer">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
          <div className="text-sm font-semibold text-gray-500">
            Welcome, {user?.username}
          </div>
        </div>
        <div className="text-gray-700">
          <p>This is your dashboard. From here you can:</p>
          <ul className="list-disc list-inside">
            <li>View and edit the menu </li>
            <li>Manage the orders</li>
          </ul>
        </div>
        <div className="flex justify-end">
          {" "}
          <a onClick={handleReturn} className="flex items-center">
            <span className="text-gray-800">Return to </span>
            <img src="/Icon.png" alt="Oaxaca Icon" className="w-12 h-12 ml-2" />
            <span className="text-xl text-green-800 ml-2">axaca</span>
          </a>
        </div>
      </div>
    </div>
  );
}