import ItemCard from "./itemCard";

export default function ItemList() {
  const dummyData = [
    {
      id: 1,
      name: "Mozzarella Pizza",
      price: 15,
      quantity: 1,
    },
    {
      id: 2,
      name: "Sushi",
      price: 10,
      quantity: 3,
    },
    {
      id: 3,
      name: "Ginger Beer",
      price: 1.5,
      quantity: 2,
    },
  ];
  return (
    <div className="w-2/3">
      {dummyData.map((data) => (
        <ItemCard item={data} />
      ))}
    </div>
  );
}
