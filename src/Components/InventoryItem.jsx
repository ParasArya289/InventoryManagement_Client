import { useRef, useState } from "react";
import { deleteInventoryItem, updateInventoryItem } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export const InventoryItem = ({ item }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  const formRef  = useRef(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    dispatch(updateInventoryItem(data,item._id));
    formRef.current.reset();
  }
  return (
    <li key={item._id} style={{ padding: "20px" }}>
      Name: {item.name}, Quantity: {item.quantity}, Price: {item.price}
      <button
        style={{ marginLeft: "20px" }}
        disabled={loading}
        onClick={() => dispatch(deleteInventoryItem(item._id))}
      >
        Delete
      </button>
      <button disabled={loading} onClick={() => setIsEdit(!isEdit)}>
        Edit
      </button>
      {isEdit && (
        <form ref={formRef} onSubmit={handleFormSubmit} style={{ marginTop: "20px" } }>
          <input name="name" placeholder="name" required defaultValue={item.name}/>
          <input name="quantity" placeholder="Quantity" required defaultValue={item.quantity}/>
          <input name="price" placeholder="Price" required defaultValue={item.price}/>
          <button disabled={loading} type="submit">
            Save
          </button>
        </form>
      )}
    </li>
  );
};
