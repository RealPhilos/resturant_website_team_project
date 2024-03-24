import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const OrderButton = ({ userType, isLoggedIn }) => {
  const router = useRouter();
  const { toast } = useToast();

  if (userType === "Waiter" || userType === "Chef") {
    return null;
  }

  const handleClick = () => {
    toast({
      title: "Login required",
      description: "You must login to place an order.",
    });
    router.push("/login");
  };

  return isLoggedIn && userType === "Customer" ? (
    <Link href="/menu">
      <button className="bg-green-800 text-white px-3 py-2 rounded-md">
        Order Now
      </button>
    </Link>
  ) : (
    <button 
      className="bg-green-800 text-white px-3 py-2 rounded-md"
      onClick={handleClick}
    >
      Order Now
    </button>
  );
};

export default OrderButton;
