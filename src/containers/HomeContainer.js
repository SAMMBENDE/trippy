import React, { Component } from 'react';
import Home from '../components/core/Home';
import Api from '../utils/Api';

class HomeContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: []
        }
    }

    componentDidMount() {
        Api.getHome()            
            .then(json => this.setState({ cities: json.cities }));           
    }

    render() {
        const { cities } = this.state;                
        // console.log(cities);

        return (
            <Home cities={cities} />
        );
    }
}

export default HomeContainer;