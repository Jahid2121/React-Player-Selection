import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Title = () => {
    return (
        <div>
            <div className="card-body items-center text-center">
    <h2 className="card-title">Shape of You</h2>
    <Button />
  </div>
        </div>
    );
};

Title.propTypes = {
    
};

export default Title;