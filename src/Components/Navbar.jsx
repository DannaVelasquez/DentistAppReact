import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {themeState, themeDispatch} = useContextGlobal();

  const switchTheme = () => {
    if(themeState.theme){
      themeDispatch({type: 'SWITCH_DARK'})
    } else {
      themeDispatch({type:'SWITCH_LIGHT'})
    }
  }

  return (
    <div className={themeState.theme ? 'navbar' : 'navbar-dark'}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <h3>DH Odonto</h3>
      <div className='navbar-right'>
      <Link to={routes.home}><p className={themeState.theme ? 'navbar' : 'navbar-dark'}>Home</p></Link>
      <Link to={routes.contact}><p className={themeState.theme ? 'navbar' : 'navbar-dark'}>Contact</p></Link>
      <Link to={routes.favs}><p className={themeState.theme ? 'navbar' : 'navbar-dark'}>Favs</p></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button  onClick={switchTheme}>{themeState.theme ? '🌒' : '🌞'}</button>
      </div>
    </div>
  )
}

export default Navbar