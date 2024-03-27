import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const OrderButton = ({ userType, isLoggedIn, overrideClassName, buttonText }) => {
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

  const buttonClass = overrideClassName ? overrideClassName : "bg-green-800 text-white px-3 py-2 rounded-md";
  const text = buttonText ? buttonText : "Order Now";

  return isLoggedIn && userType === "Customer" ? (
    <Link href="/menu">
      <button className={buttonClass}>
      {text}
      </button>
    </Link>
  ) : (
    <button 
    className={buttonClass}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default OrderButton;
