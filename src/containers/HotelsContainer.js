import React, { Component } from 'react';
import qs from 'qs';
import Api from '../utils/Api';

import Hotels from '../components/hotel/Hotels';


class HotelsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: [],
            center: {},
            zoom: 0
        }        
    }

    componentDidMount() {        
        const { city } = qs.parse(this.props.location.search.replace('?', ''));             
        
        if (city) {
            Api.getCityHotels(city)
                .then(json => this.setState({ hotels: json.hotels, center: json.center, zoom: json.zoom }));                                                
        }
    }

    renderHotels() {
        const { hotels, center, zoom } = this.state;
        const { city } = qs.parse(this.props.location.search.replace('?', ''));

        if (!city) {
            return <h2>Choose a location from the homepage</h2>
        }

        if (hotels.length === 0) {
            return <p>Loading...</p>;
        }

        return <Hotels hotels={hotels} center={center} zoom={zoom} />;
    }

    render() {
        const { hotels } = this.state;          
        // console.log("containers/HotelsContainer hotels", hotels);          

        return this.renderHotels();
    }
}

export default HotelsContainer;