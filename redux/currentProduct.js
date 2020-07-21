const initialState = { currentProduct: {} };
export default function currentProduct(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_PRODUCT":
      return { currentProduct: action.currentProduct };
    default:
      return state;
  }
}
