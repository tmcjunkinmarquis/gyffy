import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchForm.css';
import { inputLocation, loadStations } from '../../Actions/Actions';
import PropTypes from 'prop-types';
import { locationFetch } from '../../apiCalls/apiCalls';
import { cleanerForStationsByZip } 
  from '../../SampleDataAndCleaner/cleanerForStationsByZip';
export class SearchForm extends Component{
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

  makeStationFetch = async ()=>{
    const unrefinedStationData = await locationFetch(this.state.value);
    const refinedStationData = cleanerForStationsByZip(unrefinedStationData);
    this.props.loadStoreWithStations(refinedStationData); 
  }

  handleSubmitForm = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.value);
    this.resetForm();
    this.makeStationFetch(); 
  }

  render() {
    return (
      <form 
        action="" 
        onSubmit={this.handleSubmitForm}
        className= "search-form"
      >
        <input 
          type="text"
          value={this.state.value}
          placeholder='Type zipcode'
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

export const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (location) => dispatch(inputLocation(location)),
  loadStoreWithStations: (stations)=> dispatch(loadStations(stations))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(SearchForm);

SearchForm.propTypes ={
  handleSubmit: PropTypes.func,
  location: PropTypes.string,
  loadStoreWithStations: PropTypes.func
};
