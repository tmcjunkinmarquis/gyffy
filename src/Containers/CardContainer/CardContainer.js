import React from 'react';
import { Switch, Route} from 'react-router-dom';
import FuelStationList from '../FuelStationList/FuelStationList';
import ElectricStationList from '../ElectricStationList/ElectricStationsList';
import LpgStationList from '../LpgStationList/LpgStationList';

const CardContainer = (props)=>{
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
    </Switch> 
  )
}

export default CardContainer;