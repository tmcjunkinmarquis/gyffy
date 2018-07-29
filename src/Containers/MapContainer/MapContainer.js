import React, { Component } from 'react';
import { aGoogleKey } from '../../apiKey';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
// import {Map} from '../../Components/Map/Map';
// import { GoogleApiComponent } from 'google-map-react';
import PropTypes from 'prop-types';
// import { Marker } from '../../Components/Marker/Marker';

export class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedStation: {}
    };
  }

  handleMarkerClick = (props, marker, event) =>{
    this.setState({
      selectedStation: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  handleMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  selectedStationMarker = ()=>{
    return <Marker
      google={this.props.google}
      stationName={this.props.selectedStation.name}
      onClick={this.handleMarkerClick}
      postion={{ lat: this.props.selectedStation.latitude, lng: this.props.selectedStation.lng }}
      key={this.props.selectedStation.id} />;
  }
  
  
  
  render() {
    const style = {
      width: '90vw',
      height: '50vh'
    };

    // San Francisco, by default
    const initialCenter = {
      lat: 37.774929,
      lng: -122.419416
    };
    
    return (
      < Map
        google={this.props.google}
        style={style}
        initialCenter={initialCenter}
        center = {{
          lat: this.state.selectedStation.latitude,
          lng: this.state.selectedStation.longitude
        }}
        zoom={4}
        onClick={this.handleMapClick}
      >
        {this.selectedStationMarker}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWidow}
        >
          <div>
            <h3>{this.state.selectedStation}</h3>
         
          </div> 
        </InfoWindow>
      </Map>

    );
  }
}

export const mapStateToProps = (state) => ({
  selectedStation: state.selectedStation
});

const googleWrapper = GoogleApiWrapper({
  apiKey: aGoogleKey
})(MapContainer);

export default connect(mapStateToProps)(googleWrapper);

MapContainer.propTypes = {
  google: PropTypes.object,
  loaded: PropTypes.bool,
  selectedStation: PropTypes.object
};  

{/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
  type="text/javascript"></script> */}