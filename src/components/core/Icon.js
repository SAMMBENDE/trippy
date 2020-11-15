import React from 'react';
import styled from 'styled-components';

const Symbol = styled.span`
    color: ${props => props.color};
`;

const Icon = ({ type, color }) => {
    return <Symbol className="material-icons" color={color}>{type}</Symbol>
}

export default Icon;