const initialState = false

export default function update(state = initialState, action) {
  switch(action.type){
    case "DID_MOUNT":
      return true;
    default:
      break
  }

  return state;
}