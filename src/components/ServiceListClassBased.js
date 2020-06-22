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
    const {items} = this.props;

    return (
      <ul>
        {items.map(o => (
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
}

const mapStateToProps = (state) => ({
  items: state.serviceList,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeService: id => dispatch(removeService(id))
//   }
// };

const mapDispatchToProps = ({
  removeService,
  editService,
  changeServiceField,
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListClassBased);
