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
        key={station.id}/>;
    });
    
    
  };
  return(
    <div className="wrapper">
      {props.stations.length ===0 ? '' : 
        <h3 className="fuel-stations-header">FUEL STATIONS<span >   -   by zipcode</span></h3>}
      {props.filter === 'SHOW_ALL' || '' ? 
        <div className="fuel-station-list">{makeAstation()}</div> :
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