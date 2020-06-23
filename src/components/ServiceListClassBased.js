import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {removeService, editService, changeServiceField} from '../actions/actionCreators';
import {connect} from 'react-redux';

class ServiceListClassBased extends Component {
  static pencilStyles = {
    transform: 'rotate(45deg)',
  };

  handleRemove = id => {
    this.props.removeService(id);
    this.props.editService(null);
  }

  handleEdit = item => {
    const { id, name, price } = item;
    this.props.changeServiceField('name', String(name));
    this.props.changeServiceField('price', String(price));
    this.props.editService(id);
  }

  render() {
    const { items, filter } = this.props;
    const filteredItems = filter && filter !== ''
    ? items.filter((o) => 
        o.name.toLowerCase().indexOf(filter) >= 0
        || String(o.price).indexOf(filter) >= 0
      )
    : items;

    return (
      <ul>
        {filteredItems.map(o => (
          <li key={o.id}>
            {o.name} {o.price}
            <button onClick={() => this.handleEdit(o)}>
              <div style={ServiceListClassBased.pencilStyles}>✏</div>
            </button>
            <button onClick={() => this.handleRemove(o.id)}>✕</button>
          </li>
        ))}
      </ul>
    )
  }
}

ServiceListClassBased.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  filter: PropTypes.string,
}

const mapStateToProps = (state) => ({
  items: state.serviceList,
  filter: state.serviceFilter.filter,
});

const mapDispatchToProps = ({
  removeService,
  editService,
  changeServiceField,
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListClassBased);
