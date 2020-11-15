import React, { Component } from 'react';
import Card from './Card';

import Config from '../../Config';
import Global from '../../Global';

import styled from 'styled-components';
const { host } = Config;


const Container = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${Global.color.body};
    font-family: ${Global.font.primary};     
`;

class Gallery extends Component {
    renderCards(isLarge) {
        const cities = [...this.props.cities];

        if (isLarge === "large") {
            cities.splice(1, cities.length);
        } else {
            cities.splice(0, 1);
        }

        return cities.map(city =>
            <Card {...city} source={`${host}${city.source}`} key={city.slug} isLarge={isLarge === "large"} />            
        );
    }

    render() {        
        // console.log("cmp/city/Gallery cities", this.props.cities);

        return (            
            <Container className="row">
                <div className="col-md-12">
                    <h1>Explorez le monde</h1>
                </div>            
                <div className="col-12 col-md-6">
                    <div className="row">
                        {this.renderCards("large")}
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row">                    
                        {this.renderCards()}
                    </div>                    
                </div>
            </Container>
        );
            
    }
}

export default Gallery;