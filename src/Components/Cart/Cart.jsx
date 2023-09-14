import PropTypes from 'prop-types';
import PlayerCart from '../PlayerInCart/PlayerCart';

const Cart = ({selectedPlayers}) => {
    console.log(selectedPlayers);
    const {name} = selectedPlayers          
    return (
        <div>
            <h2 className='text-2xl ml-4'>Selected players:  {selectedPlayers.length}</h2>
        {
            selectedPlayers.map(selectedPlayer =>
              <PlayerCart selectedPlayer={selectedPlayer} /> )
        }
        </div>
    );
};

Cart.propTypes = {
    
};

export default Cart;