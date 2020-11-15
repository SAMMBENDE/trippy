import React, { Component } from 'react';
import styled from 'styled-components';

import Rating from './Rating';



const Container = styled.div`
    margin-bottom: 20px;    
`;

class Card extends Component {
    addDefaultSrc(evt) {
        const placeholder = "http://via.placeholder.com/300x200";
        evt.target.src = placeholder;
    }
    
    render() {        
        const { name, source, price, stars } = this.props;        

        return (
            <Container className="col-6">
                <div className="card">
                    <img className="card-img-top img-fluid" src={source} alt={name} onError={this.addDefaultSrc} />
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <p className="card-text d-flex flex-row justify-content-between">
                            <span>{price} €</span>
                            {/* <span>{stars || 'no'} stars</span> */}
                            <span><Rating stars={stars} name={name} /></span>
                        </p>
                    </div>
                </div>
            </Container>
        );
    }
}

Card.defaultProps = {
    source: "http://via.placeholder.com/300x200"
}

export default Card;