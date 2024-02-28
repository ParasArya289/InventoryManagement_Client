const initState = {
  inventory: [],
  sales: [],
  loading: false,
  error: null,
};
const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: "Something went wrong while fetching data",
      };
    case "FETCH_INVENTORY_SUCCESS":
      return {
        ...state,
        inventory: action.payload,
        loading: false,
        error: null,
      };
    case "ADD_INVENTORY_SUCCESS":
      return {
        ...state,
        inventory: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_SALES_SUCCESS":
      return {
        ...state,
        sales: action.payload,
        loading: false,
        error: null,
      };
    case "ADD_SALES_SUCCESS":
      return {
        ...state,
        sales: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default dataReducer;
