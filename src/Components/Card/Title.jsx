import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Salary from './Salary/Salary';

const Title = ({allplayers}) => {
    const {name, country, salary} = allplayers
    return (
        <div>
            <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Country:{country} </p>
    <Salary salary={salary}/>
    <Button />
  </div>
        </div>
    );
};

Title.propTypes = {
    
};

export default Title;