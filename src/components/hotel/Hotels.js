import React, { Component } from 'react';
import styled from 'styled-components';

import Card from './Card';
import Map from '../map/Map';

import Global from '../../Global';
import Config from '../../Config';
const { host } = Config;

const Container = styled.div`
    font-family: ${Global.font.primary};
    
`;


class Hotels extends Component {
    renderCards() {
        const { hotels } = this.props;
        
        return hotels.map(hotel =>
            <Card {...hotel} source={`${host}${hotel.pictures[0]}`} key={hotel._id} />
        );        
    }
    
    render() {        
        const { hotels, center, zoom } = this.props;
        // console.log("cmp/hotel/Hotels hotels", hotels);        
        

        return (
            <Container className="container-lg">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            {this.renderCards()}
                        </div>
                    </div>
                    <div className="col-6">
                        <Map hotels={hotels} center={center} zoom={zoom} />
                    </div>
                </div>
            </Container>
        );
    }
}

export default Hotels;