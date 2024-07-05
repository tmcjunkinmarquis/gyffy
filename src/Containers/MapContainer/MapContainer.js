import React, { Component } from 'react';
import { apiKey } from '../../apiKey.json';
import { Map,
  Marker,
  AdvancedMarkerElement,
  GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { setCenter } from '../../Actions/Actions';

export class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      position:{}
    };
  }

  selectedStationMarker = ()=>{
    return <Marker
      name={this.props.selectedStation.name}
      position={{
        lat: this.props.selectedStation.latitude, 
        lng: this.props.selectedStation.longitude 
      }} />;
  }
  
  componentDidMount() {
    this.setState({position: {
      lat: 39.7512822,
      lng: -104.9944365
    }});
    const lat = this.props.selectedStation.latitude;
    const lng = this.props.selectedStation.longitude;
  }
  
  render() {
    const style = {
      'margin-top': '-80px',
      width: '100vw',
      height: '65vh',
      position: 'relative'
    };
    const detailsStyle = {
      margin: '30px'
    };
    const initialCenter = {
      lat: 38.902775,
      lng: -77.455649
    };
    const center = {
      lat: this.props.selectedStation.latitude,
      lng: this.props.selectedStation.longitude
    };

    return (
      < Map
        google={this.props.google}
        style={style}
        initialCenter={initialCenter}
        center={center}
        zoom={15}
      >
        {this.selectedStationMarker()}
        <div style={detailsStyle}>
          <h3>{this.props.selectedStation.name}</h3>
          <h4>{this.props.selectedStation.phone}</h4>
        </div>
      </Map>  
    );
  }
}

export const mapStateToProps = (state) => ({
  selectedStation: state.selectedStation
});

export const mapDispatchToProps = (dispatch) =>({
  /* setCenter: (center) => dispatch(setCenter(center)) */
});

console.log("apiKey:", apiKey)
const googleWrapper = GoogleApiWrapper({
  apiKey: apiKey["apiKey"]
})(MapContainer);

export default connect(mapStateToProps, mapDispatchToProps)(googleWrapper);

MapContainer.propTypes = {
  google: PropTypes.object,
  loaded: PropTypes.bool,
  selectedStation: PropTypes.object,
  setCenter: PropTypes.object
};  
