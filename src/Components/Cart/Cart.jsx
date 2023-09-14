import PropTypes from 'prop-types';
import PlayerCart from '../PlayerInCart/PlayerCart';

const Cart = ({selectedPlayers}) => {
 
  
    return (
        <div>
             <p>Total Cost: 200000000</p>
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