import React, { Component } from 'react';
import './DetailsCard.css';
import MapContainer from '../MapContainer/MapContainer';
import PropTypes from 'prop-types';

class DetailsCard extends Component { 
  render() {
    return (
      <div className="details-card">
        
        <MapContainer className="Map-Container"/>
        
      </div>
    );
  }
}

export default DetailsCard;

DetailsCard.propTypes = {
  station: PropTypes.object
};