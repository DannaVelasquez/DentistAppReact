import { createContext, useContext, useEffect, useReducer } from "react";
import Swal from 'sweetalert2'

const ContextGlobal = createContext();

const themes = {
  dark: { theme: false },
  light: { theme: true },
};

const initialThemeState = themes.light;
const initialFavState = JSON.parse(localStorage.getItem("favs")) || [];
const initialDentistSate = { dentistList: [], dentistDetail: {} };

// useReducer for switch theme, save favorites and API consuming
const themeReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_DARK":
      return themes.dark;
    case "SWITCH_LIGHT":
      return themes.light;
    default:
      throw new Error();
  }
};

const favReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DENTIST_FAV":
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Dentist was added to favorites successfully',
        showConfirmButton: false,
        timer: 1500
      })
      return [...state, action.payload];
    default:
      throw new Error();
  }
};

const dentistReducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return {
        dentistList: action.payload,
        dentistDetail: state.dentistDetail,
      };
    case "GET_DENTIST_DETAIL":
      return { dentistDetail: action.payload, dentistList: state.dentistList };
    default:
      throw new Error();
  }
};

const ContextProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    initialThemeState
  );
  const [favState, favDispatch] = useReducer(favReducer, initialFavState);
  const [dentistState, dentistDispatch] = useReducer(
    dentistReducer,
    initialDentistSate
  );
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => dentistDispatch({ type: "GET_DENTISTS", payload: data }));
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favState));
  }, [favState]);

  return (
    <ContextGlobal.Provider
      value={{
        dentistState,
        dentistDispatch,
        themeState,
        themeDispatch,
        favState,
        favDispatch,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
