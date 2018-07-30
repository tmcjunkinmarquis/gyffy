import React, { Component } from 'react';
import './DetailsCard.css';
import { connect } from 'react-redux';
import MapContainer from '../MapContainer/MapContainer';
import PropTypes from 'prop-types';
import { setId, setSelectedStation } from '../../Actions/Actions';

class DetailsCard extends Component { 
  render() {
    return (
      <div className="details-card">
        <MapContainer />
  
      </div>
    );
  }
};

export default DetailsCard;

// export const mapDispatchToProps = (dispatch) => ({
//   setId: (id) => dispatch(setId(id)),
//   setSelectedStation: (station) => dispatch(setSelectedStation(station))
// });

// export default connect(null, mapDispatchToProps)(DetailsCard);

DetailsCard.propTypes = {
  station: PropTypes.object
};