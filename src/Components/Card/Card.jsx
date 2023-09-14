
import PropTypes from 'prop-types';
import Images from './Images';
import Title from './Title';

const Card = ({allplayers}) => {
    console.log(allplayers);
    const { player_image, name, country, salary} = allplayers
    return (
        <div>
            

            <div className="card bg-base-100 shadow-xl">
            <Images player_image={player_image}/>
            <Title allplayers={allplayers}/>
            
  
</div>


        </div>
    );
};

Card.propTypes = {
    
};

export default Card;
