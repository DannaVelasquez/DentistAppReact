import React from "react";

import { Link } from 'react-router-dom'

const Card = ({dentist}) => {
  
  let dentistFav = localStorage.getItem('dentist')
  

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    console.log(dentistFav)
    if(dentistFav) {
      alert('Dentista agregado exitosamente a favoritos')
      let parsedFavs = JSON.parse(dentistFav)
      dentistFav = [...parsedFavs, dentist]
    } else{
      alert('Dentista agregado exitosamente a favoritos')
      dentistFav = [dentist]
    }
    localStorage.setItem('dentist', JSON.stringify(dentistFav))
  }


  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src={window.location.origin + '/images/doctor.jpg'} alt='' className='card-img' />
        <Link key={dentist.id} to={'/dentist/' + dentist.id}><h4 className='Title'>{dentist.name}</h4></Link>
        <p className='Title'>{dentist.username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
