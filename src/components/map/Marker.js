import React from 'react';
import styled from 'styled-components';

import Global from '../../Global';


const Container = styled.div`
    background-color: white;
    width: 50px;
    border: 1px solid ${Global.color.primary};
    font-family: ${Global.font.primary};
    font-weight: ${Global.weight.body};
    text-align: center;
    padding: 7px;
`;

const Marker = ({ price }) => {
    return (
        <Container>
            {price} €
        </Container>
    );
}

export default Marker;