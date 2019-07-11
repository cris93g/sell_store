import axios from "axios";

const GET_TV = "GET_TV";

export function getTv() {
  return {
    type: GET_TV,
    payload: axios.get(`/api/tv`)
  };
}

const initialState = {
  items: {}
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_TV}_FULFILLED`:
      return {
        ...state,
        items: action.payload.data
      };
    default:
      return state;
  }
}
