function ItemCard({ item: { id, name, price, quantity } }) {
  return (
    <div className="flex border bg-[#FAFAF5] border-gray-300 mb-5 rounded-lg">
      <img src="pizza.jpeg" className="w-36 inline-block h-32 rounded-l-lg" />
      <div className="flex flex-col gap-2 w-full p-4">
        <div className="w-full font-semibold flex justify-between">
          <span>{name}</span>
          <span>£{quantity * price}</span>
        </div>
        <span className="text-green-800">£{price}</span>
        <div className="flex gap-2 text-sm bg-gray-400 text-white w-fit py-1 px-2 rounded-md">
          <button>-</button>
          <span>{quantity}</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
