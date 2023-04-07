import { useState, React } from "react";
import { useContextGlobal } from "./utils/global.context";
import Swal from 'sweetalert2'

const Form = () => {
  const { themeState } = useContextGlobal();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    fullname: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Regex structure for email validation
    const emailR = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let emailUser = emailR.test(user.email);
    if (emailUser && user.fullname.length > 5) {
      setError(false);
      setShow(true);
    } else {
      setShow(false);
      setError(true);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Verify your information, Please!',
        showConfirmButton: true,
      })
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Fullname"
          type="text"
          onChange={(e) => setUser({ ...user, fullname: e.target.value })}
        />
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button
          type="submit"
          className={themeState.theme ? "favButton" : "favButton-dark"}
        >
          Send
        </button>
      </form>
      {/* Show message on screen */}
      {show ? (
        <p>Thank you {user.fullname}, we will contact you soon by email</p>
      ) : null}
      {error ? <p>Verify your information, please</p> : null}
    </div>
  );
};

export default Form;
