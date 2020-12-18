import { recordConstants } from "../_constants";

const initialState = {
  records: null,
  filtered: null,
  errors: {},
  current: null,
  loading: false,
};

export const record = (state = initialState, action) => {
  switch (action.type) {
    case recordConstants.GET_RECORDS:
      return {
        ...state,
        records: action.records,
        loading: false,
      };
    case recordConstants.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
