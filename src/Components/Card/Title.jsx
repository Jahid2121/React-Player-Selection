import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Salary from './Salary/Salary';

const Title = ({player, handlePlayerSalary}) => {
    const {name, country, salary} = player
    return (
        <div>
            <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Country:{country} </p>
    <Salary salary={salary}/>
    <Button player={player} handlePlayerSalary={handlePlayerSalary}/>
  </div>
        </div>
    );
};

Title.propTypes = {
    
};

export default Title;