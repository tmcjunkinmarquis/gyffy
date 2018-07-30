import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ElectricStationList.css';
import StationCard from '../../Components/StationCard/StationCard';
import PropTypes from 'prop-types';
import { setFilter } from '../../Actions/Actions';
import { Link } from 'react-router-dom';
import DetailsCard from '../DetailsCard/DetailsCard';

class ElectricStationList extends Component {
  
  componentDidMount(){ 
    this.props.handleFilterClick('SHOW_ELEC');
  }

  filterToReturnElecStations = () => {
    const filteredStations = this.props.stations.filter((station) => {
      return station.fuelType === 'ELEC';
    });
    return filteredStations.map((station) => {
      return <Link
        to={`/details/${station.id}`}
        key={station.id}>
        <StationCard
          station={station}
          className= "station-card"
          fuelType={station.fuelType} />
      </Link>;
    });
  };

  fillTheSpan = () => {
    return 'ELEC   ';
  }

  render(){
    return (
      <div className="wrapper">
        <h3 className="fuel-stations-header">
          <span className="filter-type">{this.fillTheSpan()}</span>
          STATIONS
          <span >   -   {this.props.location}</span>
        </h3>
        <div className="fuel-station-list">{this.filterToReturnElecStations()}</div>
      </div>
    );
  } 
}

export const mapStateToProps = (state) => ({
  location: state.location,
  stations: state.stations,
  filter: state.filter
});

export const mapDispatchToProps = (dispatch) => ({
  handleFilterClick: (filter) => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(ElectricStationList);

ElectricStationList.propTypes = {
  stations: PropTypes.array,
  handleFilterClick: PropTypes.func,
  location: PropTypes.string,
  filter: PropTypes.string
};
