
export const fetchInventory = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://inventory-management-30zk.onrender.com/inventory"
    );
    const { inventory } = await response.json();
    dispatch({ type: "FETCH_INVENTORY_SUCCESS", payload: inventory });
  } catch (error) {
    console.error("Error while fetching inventory:", error);
    dispatch({ type: "FETCH_DATA_FAILURE" });
  }
};
export const fetchSales = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://inventory-management-30zk.onrender.com/sale"
    );
    const { sales } = await response.json();
    dispatch({ type: "FETCH_SALES_SUCCESS", payload: sales });
  } catch (error) {
    console.error("Error while fetching sales:", error);
    dispatch({ type: "FETCH_DATA_FAILURE" });
  }
};

export const addItemToInventory = (data) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://inventory-management-30zk.onrender.com/inventory",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const { inventory } = await response.json();
    dispatch({ type: "FETCH_INVENTORY_SUCCESS", payload: inventory });
  } catch (error) {
    console.error("Error while fetching inventory:", error);
    dispatch({ type: "FETCH_DATA_FAILURE" });
  }
};
export const updateInventoryItem = (data,id) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      `https://inventory-management-30zk.onrender.com/inventory/update/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const { inventory } = await response.json();
    dispatch({ type: "FETCH_INVENTORY_SUCCESS", payload: inventory });
  } catch (error) {
    console.error("Error while fetching inventory:", error);
    dispatch({ type: "FETCH_DATA_FAILURE" });
  }
};
export const deleteInventoryItem = (id) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      `https://inventory-management-30zk.onrender.com/inventory/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { inventory } = await response.json();
    dispatch({ type: "FETCH_INVENTORY_SUCCESS", payload: inventory });
  } catch (error) {
    console.error("Error while deleting inventory item:", error);
    dispatch({ type: "FETCH_DATA_FAILURE" });
  }
};
export const addSale = (data) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://inventory-management-30zk.onrender.com/sale",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const { sales } = await response.json();
    dispatch({ type: "ADD_SALES_SUCCESS", payload: sales });
  } catch (error) {
    console.error("Error while fetching sales:", error);
    dispatch({ type: "FETCH_DATA_FAILURE" });
  }
};
