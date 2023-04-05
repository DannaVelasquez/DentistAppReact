import { createContext, useContext, useState, useEffect } from "react";

//export const initialState = {theme: "", data: []}

const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dentists, setDentists] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setDentists(data))
  }, [])


  return (
    <ContextGlobal.Provider value={{dentists, setDentists}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)