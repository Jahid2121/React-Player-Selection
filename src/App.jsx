
import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import Cart from './Components/Cart/Cart'

function App() {

  const [allplayers, setAllplayers ] = useState([])
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [totalremaining, setTotalRemaining] =  useState(2000000)
  const [totalCost, setTotalCost] = useState(0)
  const [showBtn, setShowBtn] = useState(true)

  useEffect(()=> {
    fetch('players.json')
    .then(res => res.json())
    .then(data => setAllplayers(data))
  }, [])

    const handlePlayerSalary = playerData => {
      const showBtn = playerdata 
      setShowBtn(!showBtn)
      const isExist = selectedPlayers.find(item => item.id === playerData.id)
      let count = playerData.salary
      if (isExist) {
        return alert(`You have already added ${playerData.name}`)
      }      
      else{
        
      selectedPlayers.forEach(player => {
          count = count + player.salary
          
        } )
        const remaining = 2000000 - count
        
        if(remaining < 0) {
          return alert("Out of budget")
        }
        else {
          setTotalRemaining(remaining)
          setTotalCost(count)
        }
        
        const newPlayerData = [...selectedPlayers, playerData]
        setSelectedPlayers(newPlayerData)
      }
       
    }
    

  return (
    <>
    <div className='container mx-auto'>
     <h3 className=' text-4xl text-center mb-6'>International Premier league</h3>
     <div className='flex'>
     <div  className='w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        allplayers.map(player => <Card key={player.id} showBtn={showBtn}handlePlayerSalary={handlePlayerSalary}  player={player} />)
      }
     
     </div>
    <div className=' w-1/3'>
    
    <Cart totalremaining={totalremaining} totalCost={totalCost}  selectedPlayers={selectedPlayers}/>
    
    </div>
     </div>
    </div>  
    </>
  )
}

export default App
