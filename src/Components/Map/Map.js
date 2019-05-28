import React, { Component } from 'react';
import './Map.css';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div><i className="fas fa-map-marker"></i></div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 16.88,
      lng: 96.12
    },
    zoom: 11,
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-col" style={{ height: '280px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyCHwNLvezHTJLkY-myzmPiTZwRqfDiro4I' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={16.879537} 
            lng={96.121120}
            text='My Office'
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;