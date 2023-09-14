import PropTypes from 'prop-types';
import PlayerCart from '../PlayerInCart/PlayerCart';

const Cart = ({selectedPlayers, totalremaining}) => {
 
  
    return (
        <div>
             <p>Total Remaining: {totalremaining}</p>
            <h2 className='text-2xl ml-4'>Selected players:  {selectedPlayers.length}</h2>
        {
            selectedPlayers.map(selectedPlayer =>
              <PlayerCart key={selectedPlayer.id} selectedPlayer={selectedPlayer} /> )
        }
        </div>
    );
};

Cart.propTypes = {
    
};

export default Cart;