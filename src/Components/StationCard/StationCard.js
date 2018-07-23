import React from 'react';
import './StationCard.css';
import PropTypes from 'prop-types';

const Station = ({ station })=>{
  const { name, address } = station;

  return <div className="fuel-station">
    <h3 className="name">{name}</h3>
    <h3 className="address">{address}</h3>
  </div>;
};

export default Station;

Station.propTypes = {
  station: PropTypes.object
};