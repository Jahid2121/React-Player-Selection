
import PropTypes from 'prop-types';

const Button = ({handlePlayerSalary, player}) => {
    const {salary} = player
    return (
        <>
            <div className="card-actions">
      <button onClick={() => handlePlayerSalary(player)} className="btn btn-primary">Add Player</button>
    </div>
        </>
    );
};

Button.propTypes = {
    
};

export default Button;