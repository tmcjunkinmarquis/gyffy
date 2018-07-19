import React, { Component } from 'react';

class SearchForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value:''
    }
  }

  handleChange = (event)=>{
    console.log('happy change');
    
    this.setState({
      value: event.target.value
    })
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
        I am a search form.
        <input 
          type="text"
          value={this.state.value}
          placeholder='Type address'
          onChange = {this.handleChange}
        />
      </form>
    );
  } 
}

export default SearchForm;