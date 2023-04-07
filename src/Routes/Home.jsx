import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { dentistState } = useContextGlobal();

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Listing dentists from Context using useReducer */}
        {dentistState.dentistList.map((dentist) => (
          <Card dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
