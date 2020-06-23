import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilterField } from '../actions/actionCreators';

export default function ServiceFilter() {
  const filter = useSelector(state => state.changeFilterField);
  const dispatch = useDispatch();

  const handleChange = (evt) => dispatch(changeFilterField(evt.target.value));

  return <input name='filter' onChange={handleChange} value={filter} placeholder={'Filter...'}/>
}
