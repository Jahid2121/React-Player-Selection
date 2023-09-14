import React from 'react';
import PropTypes from 'prop-types';

const PlayerCart = ({selectedPlayer}) => {
    const {name} = selectedPlayer
    return (
        <div className=''>
            <li className='ml-3'>{name}</li>
        </div>
    );
};

PlayerCart.propTypes = {
    
};

export default PlayerCart;