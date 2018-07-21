import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchForm.css';
import { inputLocation } from '../../Actions/Actions';
import PropTypes from 'prop-types';

class SearchForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = (event)=>{
    this.setState({
      value: event.target.value
    }); 
  }

  resetForm = () => {
    this.setState({ value: '' });
  }

  handleSubmitForm = (event) => {
    
    event.preventDefault();
    this.props.handleSubmit(this.state.value);
    // this.resetForm();
  }

  //for the form: 
  
  render() {
    return (
      <form 
        className = "form"
        action="" 
        onSubmit={this.handleSubmitForm}
      >
        <input 
          type="text"
          value={this.state.value}
          placeholder='Type location'
          onChange = {this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  } 
}

export const mapStateToProps = (state)=>({
  location: state.location
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (location) => dispatch(inputLocation(location))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(SearchForm);

SearchForm.propTypes ={
  handleSubmit: PropTypes.func
  // location: PropTypes.string
};

