import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import FuelStationList from '../FuelStationList/FuelStationList';
import ElectricStationList from '../ElectricStationList/ElectricStationsList';
import LpgStationList from '../LpgStationList/LpgStationList';
import DetailsCard from '../DetailsCard/DetailsCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const CardContainer = (props)=>{
  return (
    <Switch>
      <Route
        exact path="/all"
        component={FuelStationList}
      />
      <Route
        exact path="/electric"
        component={ElectricStationList}
      />
      <Route
        exact path="/lpg"
        component={LpgStationList}
      />
      <Route
        path="/details/:id"
        render={({match})=>{
          const foundStation = props.stations.find((station)=>{
            return station.id === Number(match.params.id);
          });
          return (
            <DetailsCard foundStation={foundStation} />
          );
        }}
      />
    </Switch> 
  );
};

export const mapStateToProps = (state)=>({
  stations: state.stations
});

export default withRouter(connect(mapStateToProps)(CardContainer));

CardContainer.propTypes = {
  stations: PropTypes.array
};