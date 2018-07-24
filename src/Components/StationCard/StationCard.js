import React from 'react';
import './StationCard.css';
import PropTypes from 'prop-types';

const Station = ({ station })=>{
  const { name, address, fuelType } = station;

  return <div className="fuel-station">
    <h3 className="name">{name}</h3>
    <h3 className="address">{address}</h3>
    <h5 className="fuel-type">{fuelType}</h5>
    {fuelType === 'ELEC'? <span>connector type</span> : ''}
  </div>;
};

export default Station;

Station.propTypes = {
  station: PropTypes.object
};