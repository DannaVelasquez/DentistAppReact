import React from "react";

const Card = ({dentist}) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <h4 className='Title'>{dentist.name}</h4>
        <img src={window.location.origin + '/images/doctor.jpg'} alt='' className='card-img' />
        <h4 className='Title'>{dentist.username}</h4>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav ⭐</button>
    </div>
  );
};

export default Card;
