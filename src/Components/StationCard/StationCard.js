import React, { Component } from 'react';
import './StationCard.css';
import PropTypes from 'prop-types';
import CardDetails from '../../Containers/CardDetails/CardDetails';
import { Switch, Route } from 'react-router-dom';
import { setId } from '../../Actions/Actions';
import { connect } from 'react-redux';


class Station extends Component {
  constructor(props){
    super(props);
  }

  
  handleClick = ()=>{
    this.props.setId(this.props.station.id)
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
    console.log(this.props);
    
    return (
      <div
        onClick={this.handleClick}
        className="fuel-station">
        <p className="name">{this.props.station.name}</p>
        <p className="address">{this.props.station.address}</p>
        <p className="fuel-type fuel-type">{this.props.station.fuelType}</p>
        {this.props.station.fuelType === 'ELEC' ? <span><p>connectors: </p>{this.showConnectortype()}</span> : ''}
        <Switch>
          <Route
            exact path="/all"
            component={CardDetails}
          />
        </Switch>
      </div>
    );
  } 
};

export const mapDispatchToProps = (dispatch)=>({
  setId: (id)=>dispatch(setId(id))
});

export default connect(null, mapDispatchToProps)(Station);

Station.propTypes = {
  station: PropTypes.object
};