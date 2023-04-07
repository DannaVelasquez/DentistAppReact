import { useEffect, React } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const params = useParams();
  const { dentistState, dentistDispatch } = useContextGlobal();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  // An specific dentist is fetched by consuming the url by dinamic parameter using useReducer
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        dentistDispatch({ type: "GET_DENTIST_DETAIL", payload: data })
      );
  }, []);

  return (
    <div>
      <h1>Dentist {dentistState.dentistDetail.name}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentistState.dentistDetail.name}</td>
            <td>{dentistState.dentistDetail.email}</td>
            <td>{dentistState.dentistDetail.phone}</td>
            <td>{dentistState.dentistDetail.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
