const initialState = { products: [] };
export default function cart(state = initialState, action) {
  switch (action.type) {
    case "SEND_TO_CART":
      return { products: [action.product, ...state.products] };
    default:
      return state;
  }
}
