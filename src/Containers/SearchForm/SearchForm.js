import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchForm.css'

class SearchForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value:''
    };
  }

  handleChange = (event)=>{
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = ()=>{
    console.log('happy submit');
    console.log('location:' );
  }   
  
  render() {
    return (
      <form 
        className = "form"
        action=""
        onSubmit={this.handleSubmit}
      >
        <input 
          type="text"
          value={this.state.value}
          placeholder='Type location'
          onChange = {this.handleChange}
        />
        <button
          onClick={this.handleSubmit}>
          Enter
        </button>
      </form>
    );
  } 
}

// export const mapStateToProps = (state)=>({
//   location
// });

// export default connect(mapStateToProps)(SearchForm);

export default SearchForm
