import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

import Marker from './Marker';

import Config from '../../Config';


const Container = styled.div`
    width: 100%;
    height: 95vh;    
`;

class Map extends Component {
    renderMarkers() {
        const { hotels } = this.props;
        return hotels.map(hotel =>
            <Marker
                lat={hotel.location.lat}
                lng={hotel.location.lon}
                price={hotel.price}
            />    
        );
    }

    render() {     
        const { center, zoom } = this.props;        
        console.log("map", center, zoom)
        return (
            <Container>
                <GoogleMapReact
                    bootstrapURLKeys={{key:`${Config.mapApiKey}` }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                    {this.renderMarkers()}
                </GoogleMapReact>
            </Container>
        );
    }
}

Map.defaultProps = {
    center: {
        lat: 48.8588377,
        lng: 2.27702        
    },
    zoom: 12
}

export default Map;