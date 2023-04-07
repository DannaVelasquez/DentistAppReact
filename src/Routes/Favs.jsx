import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {

  const {favState} = useContextGlobal()

  return (
    <>
      <h1>Favorite Dentists</h1>
      <div className="card-grid">
        {/* What is added to favorites is rendered using useReducer */}
        {favState.map(dentist => <Card dentist={dentist}/>)}
      </div>
    </>
  );
};

export default Favs;
