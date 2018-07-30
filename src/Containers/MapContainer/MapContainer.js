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
      selectedStation: props, //grab fromn store 
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
    // return <Marker
    //   stationName={this.props.selectedStation.name}
    //   onClick={this.handleMarkerClick}
    //   postion={{ lat: 37.759703, lng: -122.428093 }}
    //   key={this.props.selectedStation.id} />;
    return <Marker
      name={this.props.selectedStation.name}
      position={{ lat: this.props.selectedStation.latitude, lng: this.props.selectedStation.longitude }} />
  }
  
  componentDidMount() {
    console.log('station info: ', this.props.selectedStation);
    this.setState({position: {
      lat: 39.7512822,
      lng: -104.9944365
    }});
  }
  
  render() {
    const style = {
      margin: 'auto',
      width: '90vw',
      height: '50vh',
      position: 'relative'
    };

    // San Francisco, by default
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
        center = {center}
        zoom={15}
        onClick={this.handleMapClick}
      >
        {this.selectedStationMarker()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWidow}
        >
          <div>
            <h3>{this.state.selectedStation.name}</h3>
            {console.log('station: ', this.state.selectedStation)}
            <h3>HELLO</h3>
         
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