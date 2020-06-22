import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, editService, changeServiceField} from '../actions/actionCreators';

const pencilStyles = {
  transform: 'rotate(45deg)',
};

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeService(id));
    dispatch(editService(null));
  }

  const handleEdit = (item) => {
    const { id, name, price } = item;
    dispatch(changeServiceField('name', String(name)));
    dispatch(changeServiceField('price', String(price)));
    dispatch(editService(id));
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o)}><div style={pencilStyles}>✏</div></button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList
