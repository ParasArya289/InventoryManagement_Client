import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToInventory } from "../actions";
import { InventoryItem } from "./InventoryItem";

export const Inventory = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    dispatch(addItemToInventory(data));
    formRef.current.reset();
  };
  return (
    <div>
      <h1>Inventory</h1>
      <form ref={formRef} onSubmit={submitHandler}>
        <input name="name" type="string" placeholder="Name" required />
        <input name="quantity" type="number" placeholder="Quantity" required />
        <input name="price" type="number" placeholder="Price" required />
        <button type="submit">Add item</button>
      </form>
      <ul>
        {inventory.map((item) => (
          <InventoryItem item={item} />
        ))}
      </ul>
    </div>
  );
};
