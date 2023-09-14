
import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import Cart from './Components/Cart/Cart'

function App() {

  const [allplayers, setAllplayers ] = useState([])
  const [selectedPlayers, setSelectedPlayers] = useState([])

  useEffect(()=> {
    fetch('players.json')
    .then(res => res.json())
    .then(data => setAllplayers(data))
  }, [])

    const handlePlayerSalary = data => {
    const newPlayerData = [...selectedPlayers, data]
      setSelectedPlayers(newPlayerData)
    }

  return (
    <>
    <div className='container mx-auto'>
     <h3 className=' text-4xl text-center mb-6'>International Premier league</h3>
     <div className='flex'>
     <div  className='w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        allplayers.map(player => <Card key={player.id} handlePlayerSalary={handlePlayerSalary}  player={player} />)
      }
     
     </div>
    <div className=' w-1/3'>
    
    <Cart  selectedPlayers={selectedPlayers}/>
    
    </div>
     </div>
    </div>
    </>
  )
}

export default App
