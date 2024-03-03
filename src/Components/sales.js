import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSale } from "../actions";

export const Sales = () => {
  const formRef = useRef(null);
  const filterFormRef = useRef(null);
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales);
  const [fitleredSales, setFitleredSales] = useState(sales);

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

  const filterFormHandler = (e) => {
    e.preventDefault();
    filterSale();
  };

  const filterSale = () => {
    const formData = new FormData(filterFormRef.current);
    const filters = {};
    for (const [key, value] of formData.entries()) {
      filters[key] = value;
    }
    if (filters.from && filters.to) {
      const newData = sales.filter(({ createdAt }) => {
        const convertDate = new Date(createdAt);
        const fromDate = new Date(filters.from);
        const toDate = new Date(filters.to);
        toDate.setDate(toDate.getDate() + 1);
        toDate.setHours(0, 0, 0, 0);
        return convertDate >= fromDate && convertDate <= toDate;
      });
      setFitleredSales(newData);
    }
  };

  useEffect(() => {
    filterSale();
  }, [sales]);

  return (
    <div>
      <h1>Sales</h1>

      <form ref={formRef} onSubmit={submitHandler}>
        <input name="name" type="string" placeholder="Name" required />
        <input name="price" type="number" placeholder="Price" required />
        <input name="quantity" type="number" placeholder="Quantity" required />
        <button type="submit">Add sale</button>
      </form>

      <h4>Filter</h4>
      <form onSubmit={filterFormHandler} ref={filterFormRef}>
        <label
          htmlFor="
        from"
        >
          From: <input name="from" type="date" defaultValue={"2024-01-01"} />
        </label>
        {"   "}
        <label
          htmlFor="
        from"
        >
          To: <input name="to" type="date" defaultValue={"2024-03-04"} />
        </label>
        <button type="submit">Apply</button>
      </form>
      <ul>
        {fitleredSales.map((item) => (
          <li key={item._id} style={{ padding: "20px" }}>
            Name: {item.name}, Quantity: {item.quantity}, Price:{item.price},
            Revenue: {+item.price * +item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};
