import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const params = useParams()
  const [dentistSelected, setDentistSelected] = useState({})
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setDentistSelected(data))
  }, [])
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico


  return (
    <div>
      <h1>Dentist {dentistSelected.name}</h1>
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
            <td>{dentistSelected.name}</td>
            <td>{dentistSelected.email}</td>  
            <td>{dentistSelected.phone}</td>  
            <td>{dentistSelected.website}</td>  
          </tr>
        </tbody> 
      </table>      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail