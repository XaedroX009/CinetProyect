import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="card white login-card">
      <div className="card-content black-text login-card-content">
        <h2>Iniciar Sesión</h2>
        <h2>CINET</h2>
        <input
          type="text"
          placeholder="Nombre de usuario o correo electronico"
        />
        <input type="password" placeholder="Contraseña" />
      </div>
      <div className="card-action">
        <a className="waves-effect waves-light teal lighten-2 black-text btn">
          iniciar sesión
        </a>
        <h5>
          <Link to="/register">Aun no tienes cuenta? Registrate!</Link>
        </h5>
        {/*<a href="#">This is a link</a>
      <a href="#">This is a link</a>*/}
      </div>
    </div>
  );
};

export default Login;
