import React, { Component } from 'react';
import { geolocated } from "react-geolocated";
import * as geolib from 'geolib';

class Location extends Component {

    renderLocation(){
      return geolib.getPreciseDistance(
       { latitude:35.858022399999996, longitude:139.542528 },
       { latitude:35.858022399999996, longitude:139.542528 }
       );
    }

    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
          <div>
           <p>{this.props.coords.latitude}</p>
           <p>{this.props.coords.longitude}</p>
           <p>{this.renderLocation()}</p>
            </div>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Location);
