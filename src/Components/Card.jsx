import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {
  const { favDispatch } = useContextGlobal();
  const { themeState } = useContextGlobal();

  // A dentist is added to the favorites section using useReducer
  const addFav = () => {
    favDispatch({ type: "ADD_DENTIST_FAV", payload: dentist });
  };

  return (
    <div className={themeState.theme ? "card" : "card-dark"}>
      <img
        src={window.location.origin + "/images/doctor.jpg"}
        alt=""
        className="card-img"
      />
      {/* The name of the dentist is linked to go to details section */}
      <Link key={dentist.id} to={"/dentist/" + dentist.id}>
        <h4 className="Title">{dentist.name}</h4>
      </Link>
      <p className="Title">{dentist.username}</p>
      <button
        onClick={addFav}
        className={themeState.theme ? "favButton" : "favButton-dark"}
      >
        ⭐
      </button>
    </div>
  );
};

export default Card;
