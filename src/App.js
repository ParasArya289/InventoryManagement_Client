import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { fetchInventory, fetchSales } from "./actions";
import { Inventory } from "./Components/inventory";
import { Sales } from "./Components/sales";
import { Report } from "./Components/Report";

export default function App() {
  const [selection, setSelection] = useState("inventory");
  const { loading, error } = useSelector((state) => state);
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
      {loading && <h4>Loading...</h4>}
      {error && <h4>Some Error Ocurred</h4>}
      {selection === "inventory" && <Inventory />}
      {selection === "sales" && <Sales />}
      {selection === "report" && <Report />}
    </div>
  );
}
