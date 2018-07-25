import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../Actions/Actions';
import './Filter.css'

const Filter = ({ handleFilterClick, filter, children })=>{
  
  return (

    <a 
      className="indiv-filter"
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