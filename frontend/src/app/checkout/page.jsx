import CheckoutHeader from "./components/checkoutHeader";
import ItemList from "./components/itemList";
import OrderSummary from "./components/orderSummary";

export default function CheckoutPage() {
  return (
    <div>
      <CheckoutHeader />
      <hr />
      <div className="flex gap-7 mt-5">
        <ItemList />
        <OrderSummary />
      </div>
    </div>
  );
}
