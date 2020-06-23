import { 
  ADD_SERVICE,
  REMOVE_SERVICE,
  EDIT_SERVICE,
  CHANGE_SERVICE_FIELD,
  CHANGE_FILTER_FIELD,
} from './actionTypes';

export function addService(id, name, price) {
  return {type: ADD_SERVICE, payload: {id, name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function editService(id) {
  return {type: EDIT_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function changeFilterField(value) {
  return {type: CHANGE_FILTER_FIELD, payload: {value}}
}
