import { useState } from "react";
import { useSelector } from "react-redux";

export const Report = () => {
  const inventory = useSelector((state) => state.inventory);
  const sales = useSelector((state) => state.sales);
  const [reportType, setReportType] = useState("inventory");
  return (
    <div>
      <h4>Report</h4>
      <button onClick={()=>setReportType("inventory")}>Inventory Report</button>
      <button onClick={()=>setReportType("sales")}>Sales Report</button>
      {reportType === "sales" ? (
        <div>

        
        <ul>
          {sales.map((item) => (
            <li key={item._id} style={{ padding: "20px" }}>
              Name: {item.name}, Quantity: {item.quantity}, Price:{item.price},
              Revenue: {+item.price * +item.quantity}
            </li>
          ))}
        </ul>
        <h4>Total Revenue: {sales.reduce((acc,{price,quantity})=>acc+(+price*+quantity),0)} Total Item Sold:{sales.reduce((acc,{quantity})=>acc+quantity,0)}</h4>
        </div>
      ) : (
        <div>
        <ul>
          {inventory.map((item) => (
            <li key={item._id} style={{ padding: "20px" }}>
              Name: {item.name}, Quantity: {item.quantity}, Price: {item.price}
            </li>
          ))}
        </ul>
        <h4>Total items:{inventory.length}</h4>
        </div>
      )}
    </div>
  );
};
