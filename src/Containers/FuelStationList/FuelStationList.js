import React from 'react';
import { connect } from 'react-redux';
import './FuelStationList.css';
import StationCard from '../../Components/StationCard/StationCard';

const FuelStationLIst = (props) => {
  
  const makeAstation = ()=>{
    return props.stations.map((station)=>{
      return <StationCard station={station}/>;
    });
    
    
  };
  return(
    <div className="wrapper">
      {props.stations.length ===0 ? '': <h3 className="fuel-stations-header">FUEL STATIONS<span >   -   by zipcode</span></h3>}
      
      <div className="fuel-station-list">{makeAstation()}</div>
    </div>
  );
};

export const mapStateToProps = (state)=>({
  stations: state.stations
});

export default connect(mapStateToProps)(FuelStationLIst);