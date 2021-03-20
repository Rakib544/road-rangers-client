import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
    width: '90%',
    height: '80%'
  }

class GoogleMap extends React.Component {
    render() {
    return (
        <div>
            <Map google={this.props.google} zoom={14} style={style}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        </div>
    );
    }
};

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBoa5BQPO9thdOFwrQoHUJMWRb1n-VoBW8')
})(GoogleMap)