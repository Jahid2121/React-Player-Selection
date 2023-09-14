
import PropTypes from 'prop-types';

const Images = ({player_image}) => {
    return (
        <>
          <figure className="px-10 pt-10">
    <img src={player_image} alt="Shoes" className="rounded-full" />
  </figure>
        </>
    );
};

Images.propTypes = {
    
};

export default Images;