import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSale } from "../actions";

export const Sales = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    dispatch(addSale(data));
    formRef.current.reset();
  };
  return (
    <div>
      <h1>Sales</h1>
      <input type="date" />
      <form ref={formRef} onSubmit={submitHandler}>
        <input name="name" type="string" placeholder="Name" required />
        <input name="price" type="number" placeholder="Price" required />
        <input name="quantity" type="number" placeholder="Quantity" required />
        <button type="submit">Add sale</button>
      </form>
      <ul>
        {sales.map((item) => (
          <li key={item._id} style={{ padding: "20px" }}>
            Name: {item.name}, Quantity: {item.quantity}, Price:{item.price}, Revenue: {+item.price * +item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};
