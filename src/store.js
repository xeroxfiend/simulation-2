import {createStore} from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: null,
  img: "",
  mortgage: null,
  rent: null
};

//action constants
export const STEP_1 = "STEP_1";

export const STEP_2 = "STEP_2";

export const STEP_3 = "STEP_3";

export const CLEAR = "CLEAR";

// export const HANDLE_CHANGE_STATE = "HANDLE_CHANGE_STATE";

// export const HANDLE_CHANGE_ZIP = "HANDLE_CHANGE_ZIP";

// export const ADD_NEW_HOUSE = "ADD_NEW_HOUSE";

function reducer(state = initialState, action) {
  switch (action.type) {
    case STEP_1:
      return {
        ...state,
        name: action.payload.name,
        address: action.payload.address,
        city: action.payload.city,
        state: action.payload.state,
        zip: action.payload.zip
      };
    case STEP_2:
      return {...state, img: action.payload.img};
    case STEP_3:
      return {
        ...state,
        mortgage: action.payload.mortgage,
        rent: action.payload.rent
      };
    case CLEAR:
      return {
        ...state,
        name: action.payload.name,
        address: action.payload.address,
        city: action.payload.city,
        state: action.payload.state,
        zip: action.payload.zip,
        img: action.payload.img,
        mortgage: action.payload.mortgage,
        rent: action.payload.rent
      };
    // case HANDLE_CHANGE_ZIP:
    //   return {...state, zip: action.payload};
    // case ADD_NEW_HOUSE:
    //   return {...state, houseList: [state.houseList, state.name]};
    default:
      return state;
  }
}

export default createStore(reducer);
