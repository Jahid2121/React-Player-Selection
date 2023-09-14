
import PropTypes from 'prop-types';
import Images from './Images';
import Title from './Title';

const Card = ({player, handlePlayerSalary, showBtn}) => {
    return (
        <div>
            

            <div className="card bg-base-100 shadow-xl">
            <Images player_image={player_image}/>
            <Title handlePlayerSalary={handlePlayerSalary} player={player} showBtn={showBtn}/>
            
  
</div>


        </div>
    );
};

Card.propTypes = {
    
};

export default Card;
