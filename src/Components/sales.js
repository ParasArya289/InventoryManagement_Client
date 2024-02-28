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
      <form ref={formRef} onSubmit={submitHandler}>
        <input
          name="description"
          type="string"
          placeholder="Description"
          required
        />
        <input name="amount" type="number" placeholder="Amount" required />
        <button type="submit">Add sale</button>
      </form>
      <ul>
        {sales.map((item) => (
          <li key={item._id} style={{ padding: "20px" }}>
            Desc: {item.description}, Amount: {item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};
