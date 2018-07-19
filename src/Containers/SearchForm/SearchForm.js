import React, { Component } from 'react';

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
    
    
  }   
  
  render() {
    return (
      <form 
        action=""
        onSubmit={this.handleSubmit}
      >
        <input 
          type="text"
          value={this.state.value}
          placeholder='Type address'
          onChange = {this.handleChange}
        />
        <button
          onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  } 
}

export default SearchForm;