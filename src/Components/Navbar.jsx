import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {


  return (
    <div className='navbar'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <h3>DH Odonto</h3>
      <div className='navbar-right'>
      <Link to={routes.home}><p>Home</p></Link>
      <Link to={routes.contact}><p>Contact</p></Link>
      <Link to={routes.favs}><p>Favs</p></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
      </div>
    </div>
  )
}

export default Navbar