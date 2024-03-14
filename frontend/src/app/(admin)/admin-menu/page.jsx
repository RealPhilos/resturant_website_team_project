
"use client";

import React, { useEffect, useState } from "react";
import api from "../../services/api";
export default function MenuPage() {

  const [menus, setMenus] = useState([]);

  const handleRemove = async (id) => {
    try {
      console.log(id);
      await api.delete(`/foods/${id}`);
      
      setMenus(menus => menus.filter(menu => menu.foodId !== id));
    } catch (error) {
      console.error("Error removing menu item:", error);
    }
  };



  const handleAddToMenu = async () => {
    // Code to open the popup form
    const formWindow = window.open("/form", "_blank", "width=400,height=400");
    formWindow.document.write("<h1>Add to Menu</h1>");
    formWindow.document.write("<form>");
    formWindow.document.write("<div><label for='name'>Name:</label>");
    formWindow.document.write("<input type='text' id='name' name='name'></div>");
    formWindow.document.write("<div><label for='desc'>Description:</label>");
    formWindow.document.write("<input type='text' id='desc' name='desc'></div>");
    formWindow.document.write("<div><label for='category'>Category:</label>");
    formWindow.document.write("<input type='text' id='category' name='category'></div>");
    formWindow.document.write("<div><label for='price'>Price:</label>");
    formWindow.document.write("<input type='text' id='price' name='price'></div>");
    formWindow.document.write("<button type='submit'>Submit</button>");
    formWindow.document.write("</form>");

    formWindow.document.querySelector("form").addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = formWindow.document.querySelector("#name").value;
      const description = formWindow.document.querySelector("#desc").value;
      const category = formWindow.document.querySelector("#category").value;
      const price = formWindow.document.querySelector("#price").value;
      console.log(name, description, category, price);
      try {
        const response = await api.post(`/foods`, {
            name: name,
            description: description,
            category: category,
            price: price
        });
        const updatedMenuResponse = await api.get("/foods");
        setMenus(updatedMenuResponse.data);
        formWindow.close();
      } catch (error) {
        console.error("Error adding menu item:", error);
      }
    });
  };

  

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get("/foods");
        console.log(response.data);
        setMenus(response.data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
  
    fetchMenu();
  }, []); 
  

  return (
    <div>
      MenuPage
      <div className="w-full">
        <hr />
        <div className="grid grid-cols-3 gap-4 gap-x-12 mt-8">
          {menus.map((menu) => (
            <div key={menu.foodId}>
              {menu.name}
              <button className="py-1.5 bg-green-700 text-white mr-2 px-2.5 text-sm rounded-2xl" onClick={() => handleRemove(menu.foodId)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <button className="py-1.5 bg-blue-500 text-white mr-2 px-2.5 text-sm rounded-2xl" onClick={handleAddToMenu}>
        Add to Menu
      </button>
    </div>
  );
}
