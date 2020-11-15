import React, { Component } from 'react';
import Gallery from '../city/Gallery';


class Home extends Component {
    render() {        
        const { cities } = this.props;

        return (
            <div className="container-lg">                
                {cities.length > 0 && <Gallery cities={cities} />}
            </div>
        );
    }
}

export default Home;