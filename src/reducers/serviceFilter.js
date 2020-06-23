import {CHANGE_FILTER_FIELD} from '../actions/actionTypes'

const initialState = {
  filter: '',
};

export default function serviceFilterReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER_FIELD:
      const { value } = action.payload;
      return { ...state, filter: value.trim().toLowerCase() };
    default:
      return state;
  }
}
