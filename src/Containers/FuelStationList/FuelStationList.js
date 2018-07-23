import React from 'react';
import { connect } from 'react-redux';
import './FuelStationList.css';
import Station from '../../Components/Station/Station';

const FuelStationLIst = (props) => {
  
  const makeAstation = ()=>{
    return props.stations.map((station)=>{
      return <div>
        <Station station={station}/>
    </div>
    })
    
    
  }
  return(
    <div>
      <h3>FUEL STATIONS<span >   -   by zipcode</span></h3>{makeAstation()}</div>
  )
}

export const mapStateToProps = (state)=>({
  stations: state.stations
})

export default connect(mapStateToProps)(FuelStationLIst)