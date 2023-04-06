import React from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {dentists} = useContextGlobal()
  const {themeState} = useContextGlobal()

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