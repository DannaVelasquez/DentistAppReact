import React from "react";

import { Link } from 'react-router-dom'
import { useContextGlobal } from "./utils/global.context";

const Card = ({dentist}) => {
  
  const {favDispatch} = useContextGlobal()
  const {themeState} = useContextGlobal()
  

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    favDispatch({type: 'ADD_DENTIST_FAV', payload: dentist})
  }


  return (
    <div className={themeState.theme ? 'card' : 'card-dark'}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src={window.location.origin + '/images/doctor.jpg'} alt='' className='card-img' />
        <Link key={dentist.id} to={'/dentist/' + dentist.id}><h4 className='Title'>{dentist.name}</h4></Link>
        <p className='Title'>{dentist.username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className={themeState.theme ? 'favButton' : 'favButton-dark'}>⭐</button>
    </div>
  );
};

export default Card;
