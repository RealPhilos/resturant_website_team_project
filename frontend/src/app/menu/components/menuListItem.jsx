function MenuListItem({ menu }) {
  return (
    <div className="w-full bg-[#FAFAF5] flex px-11 py-5 rounded-3xl border">
      <div className="w-1/3">
        <h3 className="font-semibold">Name</h3>
        <h3 className="text-md">{menu.name}</h3>
      </div>
      <div className="w-1/4">
        <h3 className="font-semibold">Price</h3>
        <span className="text-md text-gray-600 mb-2">£{menu.price}</span>
      </div>
      <div>
        <h3 className="font-semibold">Description</h3>
        <p className="text-gray-700 text-sm  mb-2">{menu.description}</p>
      </div>
    </div>
  );
}

export default MenuListItem;
