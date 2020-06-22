import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeServiceField, addService, editService} from '../actions/actionCreators';

class ServiceAddClassBased extends Component {
  handleChange = evt => {
    const { name, value } = evt.target;
    this.props.onChange(name, value);
  }

  handleSubmit = evt => {
    const {item, editingItemID} = this.props;
    evt.preventDefault();
    this.props.onSave(editingItemID, item.name, Number(item.price));
    this.clearFields();
  }

  handleCancel = evt => {
    this.clearFields();
  }

  clearFields = () => {
    if (this.props.editingItemID) this.props.onEdit(null);
    this.props.onChange('name', '');
    this.props.onChange('price', '');
  }

  render() {
    const { item, editingItemID } = this.props;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <input name='name' onChange={this.handleChange} value={item.name} />
        <input name='price' onChange={this.handleChange} value={item.price} />
        <button type='submit'>Save</button>
        { editingItemID && <button onClick={this.handleCancel}>Cancel</button> }
      </form>
    );
  }
}


ServiceAddClassBased.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  item: state.serviceAdd,
  editingItemID: state.serviceEdit.editingItemID,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, value) => dispatch(changeServiceField(name, value)),
    onSave: (id, name, price) => dispatch(addService(id, name, Number(price))),
    onEdit: (id) => dispatch(editService(id)),
  }
};

// const mapDispatchToProps = ({
//   onChange: changeServiceField,
//   onSave: addService,
//   onEdit: editService,
// });

export default connect(mapStateToProps, mapDispatchToProps)(ServiceAddClassBased);
