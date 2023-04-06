import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  let dentistFav = localStorage.getItem('dentist')
  let parsedFavs = JSON.parse(dentistFav)

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {parsedFavs.map(dentist => <Card dentist={dentist}/>)}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
