import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Global from '../../Global';


const Nav = styled.nav`    
    font-family: ${Global.font.primary};
    background-color: ${Global.color.primary};  
    
    ${props => props.isScrolled && css`
        background-color: ${Global.color.transparent};
        & ${StyledLink} {
            color: ${Global.color.body}!important;
        }
    `}
`;

const StyledLink = styled(NavLink)`
    color: ${Global.color.disabled};
    &.navbar-brand {        
        font-weight: ${Global.weight.header};
    }
    &.active {
        color: ${Global.color.tertiary};
    }
    &:hover {
        color: ${Global.color.tertiary};
    }
`;

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isScrolled: false,
            isReady: false
        }
    }

    componentDidMount() {
        window.onscroll = this.onScroll.bind(this);
    }

    onScroll() {        
        this.setState({
            isScrolled: true
        });
        
        if (window.scrollY === 0) {
            this.setState({
                isScrolled: false
            });
        }
    }

    render() {
        const { isScrolled } = this.state;        
        return (
            <Nav 
                className="navbar navbar-expand align-items-baseline sticky-top"                 
                isScrolled={isScrolled}
            >
                
                <StyledLink to="/" className="navbar-brand active">Trippy</StyledLink>
                <div className="navbar-nav">                    
                    <StyledLink to="/hotels" className="nav-item nav-link">Hotels</StyledLink>                    
                    <StyledLink to="/hotels:id" className="nav-item nav-link">Restaurants</StyledLink>
                    <StyledLink to="/login" className="nav-item nav-link">Login</StyledLink>
                    <StyledLink to="/signup" className="nav-item nav-link">Signup</StyledLink>
                </div>
            </Nav>
        );
    }
}

export default Navigation