function ItemCard({ item: { id, name, price, quantity } }) {
  return (
    <div className="flex border bg-[#FAFAF5] border-gray-300 my-5 rounded-lg">
      <img src="pizza.jpeg" className="w-36 inline-block h-32 rounded-l-lg" />
      <div className="flex flex-col gap-2 w-full p-4">
        <div className="w-full font-semibold flex justify-between">
          <span>{name}</span>
          <span>£{price}</span>
        </div>
        <span className="text-green-800">£{price}</span>
      </div>
    </div>
  );
}

export default ItemCard;
