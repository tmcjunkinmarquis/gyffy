import React from 'react';
import './DetailsCard.css';
import { connect } from 'react-redux';
import MapContainer from '../MapContainer/MapContainer';

const DetailsCard = (props)=>{ 
  return (
    <div>
      <h2>I am a details card</h2>
      <MapContainer />
    </div>
  );
};

export default DetailsCard;