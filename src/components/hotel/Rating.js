import React from 'react';
import Icon from '../core/Icon';

import Global from '../../Global';


const Rating = ({stars, name }) => {
    const numStars = 5;
    const numStarsArr = Array(numStars).fill(<Icon type="star_border" color={`${Global.color.stars}`} />);    
    if (!stars) {
        return numStarsArr;
    }    
    
    const coloredStars = numStarsArr.splice(0, stars).map((star, index) => <Icon type="star" color={`${Global.color.stars}`} key={index} />);    
    const allStars = [...coloredStars, ...numStarsArr];
    return allStars;
}
    

export default Rating;