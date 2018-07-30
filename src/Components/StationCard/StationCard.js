import React, { Component } from 'react';
import './StationCard.css';
import PropTypes from 'prop-types';
import { setId, setSelectedStation } from '../../Actions/Actions';
import { connect } from 'react-redux';

export class Station extends Component {
 
  handleClick = ()=>{
    this.props.setId(this.props.station.id);
    this.props.setSelectedStation(this.props.station);
  }
  
  showConnectortype = ()=>{
    return this.props.station.connectorTypes.map((type)=>{
      return <span 
        className="connector-type"
        key={type}>
        {`${type}`}</span>;
    });
  };

  render() { 
    return (
      <div
        onClick={this.handleClick}
        className="fuel-station">
        <p className="name">{this.props.station.name}</p>
        <p className="address">{this.props.station.address}</p>
        <p className="fuel-type fuel-type">{this.props.station.fuelType}</p>
        {this.props.station.fuelType === 'ELEC' ? <span><p>connectors: </p>{this.showConnectortype()}</span> : ''}
      </div>
    );
  } 
};

export const mapDispatchToProps = (dispatch)=>({
  setId: (id)=>dispatch(setId(id)),
  setSelectedStation: (station) => dispatch(setSelectedStation(station))
});

export default connect(null, mapDispatchToProps)(Station);

Station.propTypes = {
  station: PropTypes.object,
  setId: PropTypes.func,
  setSelectedStation: PropTypes.func
};