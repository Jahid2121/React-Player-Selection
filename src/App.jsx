
import './App.css'
import Card from './Components/Card/Card'

function App() {

  return (
    <div className=' container mx-auto'>
     <h3 className=' text-4xl text-center'>International Premier league</h3>
     <div  className=' grid grid-cols-3 gap-4'>
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     </div>
    </div>
  )
}

export default App
