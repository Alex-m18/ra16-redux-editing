import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, editService, changeServiceField} from '../actions/actionCreators';

const pencilStyles = {
  transform: 'rotate(45deg)',
};

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const { filter } = useSelector(state => state.serviceFilter);
  const filteredItems = filter && filter !== ''
    ? items.filter((o) => 
        o.name.toLowerCase().indexOf(filter) >= 0
        || String(o.price).indexOf(filter) >= 0
      )
    : items;

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
      {filteredItems.map(o => (
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
