import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, editService} from '../actions/actionCreators';

function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);
  const {editingItemID} = useSelector(state => state.serviceEdit);
  const dispatch = useDispatch();

  const clearFields = () => {
    if (editingItemID) dispatch(editService(null));
    dispatch(changeServiceField('name', ''));
    dispatch(changeServiceField('price', ''));
  }

  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeServiceField(name, value));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addService(editingItemID, item.name, Number(item.price)));
    clearFields();
  }

  const handleCancel = evt => {
    clearFields();
  }


  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={item.name} />
      <input name='price' onChange={handleChange} value={item.price} />
      <button type='submit'>Save</button>
      { editingItemID && <button onClick={handleCancel}>Cancel</button> }
    </form>
  );
}

export default ServiceAdd;
