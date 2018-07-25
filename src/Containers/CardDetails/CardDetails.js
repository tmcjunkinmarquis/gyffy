import React from 'react';
import './CardDetails.css';
import { connect } from 'react-redux';

const CardDetails = (props)=>{
  return (
    <div>`hello ${props.id}`</div>
  );
};

export const mapStateToProps = (state) =>({
  id: state.id
});

export default connect(mapStateToProps)(CardDetails)