import React from 'react';
import { mapStateToProps } from '../FuelStationList/FuelStationList';
import { connect } from 'react-redux';
import { setFilter } from '../../Actions/Actions';
import './Filter.css'

const Filter = ({ handleFilterClick, filter, children })=>{
  
  return (

    <a 
      className="indiv-filter"
      href="#"
      onClick={(event) => {
        event.preventDefault();
        handleFilterClick(filter);
      }}
    >
      {children}
    </a>
  );
};

export const mapDispatchToProps= (dispatch)=>({
  handleFilterClick: (filter)=>dispatch(setFilter(filter))
});

export default connect(null, mapDispatchToProps)(Filter);