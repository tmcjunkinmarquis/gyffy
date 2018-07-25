import React from 'react';
import './StationCard.css';
import PropTypes from 'prop-types';

const Station = ({ station })=>{
  const { name, address, fuelType, connectorTypes } = station;

  const showConnectortype = ()=>{
    return connectorTypes.map((type)=>{
      return <span 
        className="connector-type"
        key={type}><p>connector: </p>{` ${type}`}</span>
    })
  }

  return <div className="fuel-station">
    <p className="name">{name}</p>
    <p className="address">{address}</p>
    <p className="fuel-type fuel-type">{fuelType}</p>
    {fuelType === 'ELEC'? <span>{showConnectortype()}</span> : ''}
  </div>;
};

export default Station;

Station.propTypes = {
  station: PropTypes.object
};