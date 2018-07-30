import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FuelStationList.css';
import StationCard from '../../Components/StationCard/StationCard';
import PropTypes from 'prop-types';
import { setFilter } from '../../Actions/Actions';
import { Link } from 'react-router-dom';


class FuelStationList extends Component {
  
  componentDidMount(){
    this.props.handleFilterClick('SHOW_ALL')
  }
  
  makeAstation = ()=>{
    return this.props.stations.map((station)=>{
      return <Link 
        to={`/details/${station.id}`}
        key={station.id}> 
        <StationCard 
          station={station}
          
          fuelType={station.fuelType}/>
      </Link>;
    });
  };

  fillTheSpan = () => {
    return 'ALL  ';
  }

  render(){
    return (
      <div className="wrapper">
        <h3 className="fuel-stations-header">
          <span className="filter-type">{this.fillTheSpan()}</span>
          STATIONS
          <span >   -   {this.props.location}</span>
        </h3>
        <div className="fuel-station-list">{this.makeAstation()}</div>
      </div>
    );
  } 
}

export const mapStateToProps = (state)=>({
  location: state.location,
  stations: state.stations,
  filter: state.filter
});

export const mapDispatchToProps = (dispatch) => ({
  handleFilterClick: (filter) => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(FuelStationList);

FuelStationList.propTypes = {
  stations: PropTypes.array,
  location: PropTypes.string,
  handleFilterClick: PropTypes.func
};