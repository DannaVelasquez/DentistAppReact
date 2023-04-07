import React from "react";
import { useState } from "react";

import { useContextGlobal } from "./utils/global.context";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  
  const {themeState} = useContextGlobal()
  
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    fullname: '',
    email: '',
  });

const handleSubmit = (e) => {
  e.preventDefault()
  const emailR = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  let emailUser = emailR.test(user.email)
  if(emailUser && user.fullname.length > 5){
    setError(false)
    setShow(true)
  }else{
    setShow(false)
    setError(true)
    alert('Por favor verifique su información nuevamente!')
  }
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='Fullname'type='text'
        onChange={(e) => setUser({...user, fullname: e.target.value})}/>
        <input placeholder='Email' type='email'
        onChange={(e) => setUser({...user, email: e.target.value})}/>
        <button type='submit' className={themeState.theme ? 'favButton' : 'favButton-dark'}>Send</button>
      </form>
      {show ? <p>Gracias {user.fullname}, te contactaremos cuando antes vía mail</p> : null}
      {error ? <p>Por favor verifique su información nuevamente</p> : null}
    </div>
  );
};

export default Form;
