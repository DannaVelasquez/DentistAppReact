import { createContext, useContext, useState, useEffect, useReducer } from "react";

//export const initialState = {theme: "", data: []}
const ContextGlobal = createContext();

const themes = {
  dark: {
    theme: false
  },
  light: {
    theme: true
  }
}

const initialThemeState = themes.light
const initialFavState = JSON.parse(localStorage.getItem('favs')) || []

const themeReducer = (state, action) => {
  switch(action.type){
    case 'SWITCH_DARK':
      return themes.dark
    case 'SWITCH_LIGHT':
      return themes.light
    default:
      throw new Error
  }
}

const favReducer = (state, action) => {
  switch(action.type){
    case 'ADD_DENTIST_FAV':
      alert('Dentista fue agregado a favoritos satisfactoriamente')
      return [...state, action.payload]
    default:
      throw new Error
  }
}

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
  const [favState, favDispatch] = useReducer(favReducer,initialFavState )
  const [dentists, setDentists] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState))
  },[favState])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setDentists(data))
  }, [])


  return (
    <ContextGlobal.Provider value={{dentists, setDentists, themeState, themeDispatch, favState, favDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)