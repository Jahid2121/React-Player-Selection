import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Salary from './Salary/Salary';

const Title = () => {
    return (
        <div>
            <div className="card-body items-center text-center">
    <h2 className="card-title">Shape of You</h2>
    <Salary />
    <Button />
  </div>
        </div>
    );
};

Title.propTypes = {
    
};

export default Title;