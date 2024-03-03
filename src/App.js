import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { fetchInventory, fetchSales } from "./actions";
import { Inventory } from "./Components/inventory";
import { Sales } from "./Components/sales";
import { Report } from "./Components/Report";

export default function App() {
  const [selection, setSelection] = useState("inventory");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInventory());
    dispatch(fetchSales());
  }, []);
  return (
    <div className="App">
      <button onClick={() => setSelection("inventory")}>Inventory</button>
      <button onClick={() => setSelection("sales")}>Sales</button>
      <button onClick={() => setSelection("report")}>Report</button>
      {selection === "inventory" && <Inventory />}
      {selection === "sales" && <Sales />}
      {selection === "report" && <Report />}
    </div>
  );
}
