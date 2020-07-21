const initialState = { user: null };
export default function auth(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { user: action.user };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
}
