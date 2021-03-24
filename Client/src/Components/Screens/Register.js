import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div id="content-card" class="card white register-card">
        <div class="card-content black-text register-card-content">
          <h2>Registrate </h2>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Nombre de usuario" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="Contraseña" />
          <input type="password" placeholder="Confirmar contraseña" />
        </div>
        <div class="card-action">
          <a class="waves-effect waves-light teal lighten-2 black-text btn">
            Confirmar registro
          </a>
          {/*<a href="#">This is a link</a>
        <a href="#">This is a link</a>*/}
          <h5>
            <Link to="/login">
              Ya tienes una cuenta? click aqui para iniciar sesion!
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Register;
