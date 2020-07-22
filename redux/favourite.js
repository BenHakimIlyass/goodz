const initialState = { products: [] };
export default function favourite(state = initialState, action) {
  switch (action.type) {
    case "SET_AS_FAVOURITE":
      return { products: [action.product, ...state.products] };
    default:
      return state;
  }
}
