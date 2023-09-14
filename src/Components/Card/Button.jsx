
import PropTypes from 'prop-types';
import { useState } from 'react';

const Button = ({handlePlayerSalary, player, showBtn}) => {
    const [ isClicked, setIsClicked ] =  useState(false);
    return (
        <>
            <div className="card-actions">
            <button className='btn btn-primary '
             disabled={isClicked}
            onClick={() => { 
                handlePlayerSalary(player)
                setIsClicked(true)

            }}>{isClicked ? '✔ Player added' : "Add this player"} </button>


          
    </div>
        </>
    );
};

Button.propTypes = {
    
};

export default Button;