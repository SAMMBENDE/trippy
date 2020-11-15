import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Global from '../../Global';

const Container = styled.div`    
`;

const StyledLink = styled(Link)`
    color: ${Global.color.body};
    font-size: ${Global.size.caption};
    font-weight: ${Global.weight.caption}; 
    &:hover {
        text-decoration: none;
    }
`;

const Image = styled.img`
    height: 25vh;
    
    ${props => props.isLarge && css`
        height: 53vh;
    `}
    
`;

class Card extends Component {
    addDefaultSrc(evt) {
        const placeholder = "http://via.placeholder.com/300x200";
        evt.target.src = placeholder;
    }

    render() {
        const { name, source, slug, isLarge } = this.props;            
        const size = isLarge ? 'col-12' : 'col-6';        

        return (
            <Container className={size}>
                <StyledLink to={`/hotels?city=${slug}`}>
                    <figure>
                        <Image 
                            className="img-fluid" 
                            src={source} 
                            alt={name} 
                            isLarge={isLarge} 
                            onError={this.addDefaultSrc} 
                        />
                        <figcaption>{name}</figcaption>
                    </figure>
                </StyledLink>
            </Container>
        );
    }
}

Card.defaultProps = {
    name: '',
    source: 'http://via.placeholder.com/300x200',
    slug: ''
}

export default Card;