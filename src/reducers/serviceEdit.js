import { EDIT_SERVICE } from '../actions/actionTypes'

const initialState = {
  editingItemID: null,
};

export default function serviceEditReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_SERVICE:
      const {id} = action.payload;
      return {...state, editingItemID: id};
    default:
      return state;
  }
}
