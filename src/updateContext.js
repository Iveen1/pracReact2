export default function updateContext(state, action) {
  return {
    data: [...state.data, action.payload]
  };
}
