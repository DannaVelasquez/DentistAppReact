import React from 'react'
import Card from '../Components/Card'
import { useEffect, useState } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentists, setDentists] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setDentists(data))
  }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map(dentist => <Card dentist={dentist}/>)}
      </div>
    </main>
  )
}

export default Home