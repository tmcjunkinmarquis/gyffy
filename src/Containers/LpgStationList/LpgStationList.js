import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LpgStationList.css';
import StationCard from '../../Components/StationCard/StationCard';
import PropTypes from 'prop-types';
import { setFilter } from '../../Actions/Actions';

class LpgStationList extends Component {

  componentDidMount() {
    this.props.handleFilterClick('SHOW_LPG');
  }

  filterToReturnLpgStations = () => {
    const filteredStations = this.props.stations.filter((station) => {
      return station.fuelType === 'LPG';
    });
    return filteredStations.map((station) => {
      return <StationCard
        station={station}
        key={station.id}
        fuelType={station.fuelType} />;
    });
  };

  fillTheSpan = ()=>{
    return 'LPG   '
  }

  render() {
    return (
      <div className="wrapper">
        <h3 className="fuel-stations-header"><span className="filter-type">{this.fillTheSpan()}</span>STATIONS
          <span >   -   {this.props.location}</span>
        </h3> 
        <div className="fuel-station-list">
          {this.filterToReturnLpgStations()}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LpgStationList);

LpgStationList.propTypes = {
  stations: PropTypes.array,
  handleFilterClick: PropTypes.func,
  location: PropTypes.string,
  filter: PropTypes.string
};