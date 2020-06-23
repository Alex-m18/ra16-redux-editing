import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilterField } from '../actions/actionCreators';

export class ServiceFilterClassBased extends Component {
  handleChange = (evt) => this.props.onChange(evt.target.value);

  render() {
    return <input name='filter' onChange={this.handleChange} value={this.props.filter} placeholder={'Filter...'} />
  }
}


ServiceFilterClassBased.propTypes = {
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  filter: state.serviceFilter.filter,
});

const mapDispatchToProps = {
  onChange: changeFilterField,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceFilterClassBased);
