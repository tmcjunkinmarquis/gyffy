import React from 'react';
import { connect } from 'react-redux';
import './FuelStationList.css';
import StationCard from '../../Components/StationCard/StationCard';
import PropTypes from 'prop-types';

const FuelStationLIst = (props) => {
  
  const makeAstation = ()=>{
    return props.stations.map((station)=>{
      return <StationCard 
        station={station}
        key={station.id}
        fuelType={station.fuelType}/>;
    });
  };

  const filterToReturnElecStations = () => {
    const filteredStations = props.stations.filter((station) => {
      return station.fuelType === 'ELEC';
    });
    return filteredStations.map((station)=>{
      return <StationCard
        station={station}
        key={station.id}
        fuelType={station.fuelType}/>;
    });  
  };


  return(
    <div className="wrapper">
      {props.stations.length === 0 ? '' : 
        <h3 className="fuel-stations-header">FUEL STATIONS
          <span >   -   by zipcode</span>
        </h3>}
      {props.filter === '' && 
        <div className="fuel-station-list">{makeAstation()}</div>}
      {props.filter === 'SHOW_ALL' ? 
        <div className="fuel-station-list">{makeAstation()}</div> :
        ''
      }
      {props.filter === 'SHOW_ELEC' ?
        <div className="fuel-station-list">
          {filterToReturnElecStations()}
        </div> :
        ''
      }
    </div>
  );
};

export const mapStateToProps = (state)=>({
  stations: state.stations,
  filter: state.filter
});

export default connect(mapStateToProps)(FuelStationLIst);

FuelStationLIst.propTypes = {
  stations: PropTypes.array
};