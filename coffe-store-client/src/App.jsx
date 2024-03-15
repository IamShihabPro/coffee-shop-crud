import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'

function App() {

  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='m-20 '>
      <h1 className='text-6xl text-center text-purple-600 my-20'> Coffees: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4 mt-6 '>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
     
    </div>
  )
}

export default App
