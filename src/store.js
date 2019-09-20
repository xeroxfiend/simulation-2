import {createStore} from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: null,
  houseList: []
};

//action constants
export const HANDLE_CHANGE_NAME = "HANDLE_CHANGE_NAME";

export const HANDLE_CHANGE_ADDRESS = "HANDLE_CHANGE_ADDRESS";

export const HANDLE_CHANGE_CITY = "HANDLE_CHANGE_CITY";

export const HANDLE_CHANGE_STATE = "HANDLE_CHANGE_STATE";

export const HANDLE_CHANGE_ZIP = "HANDLE_CHANGE_ZIP";

export const ADD_NEW_HOUSE = "ADD_NEW_HOUSE";

function reducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_CHANGE_NAME:
      return {...state, name: action.payload};
    case HANDLE_CHANGE_ADDRESS:
      return {...state, address: action.payload};
    case HANDLE_CHANGE_CITY:
      return {...state, city: action.payload};
    case HANDLE_CHANGE_STATE:
      return {...state, state: action.payload};
    case HANDLE_CHANGE_ZIP:
      return {...state, zip: action.payload};
    case ADD_NEW_HOUSE:
      return {...state, houseList: [state.houseList, state.name]};
    default:
      return state;
  }
}

export default createStore(reducer);
