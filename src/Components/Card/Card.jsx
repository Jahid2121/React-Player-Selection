
import PropTypes from 'prop-types';
import Images from './Images';
import Title from './Title';
import Button from './Button';

const Card = () => {
    return (
        <div>
            

            <div className="card bg-base-100 shadow-xl">
            <Images />
            <Title />
            
  
</div>


        </div>
    );
};

Card.propTypes = {
    
};

export default Card;
