function MenuListItem({ menu }) {
  return (
    <div className="w-full bg-white rounded-3xl border ">
      <h3 className="text-lg font-semibold">{menu.name}</h3>
      <h3 className="text-md text-gray-600 mb-2">£{menu.price}</h3>
      <p className="text-gray-700 text-sm  mb-2">{menu.description}</p>
    </div>
  );
}

export default MenuListItem;
