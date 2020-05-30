const initialState = { sidebar: false };

export default function sidebar(state = initialState, action) {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return { ...state, sidebar: true };
    case "CLOSE_SIDEBAR":
      return { ...state, sidebar: false };
    default:
      return state;
  }
}
