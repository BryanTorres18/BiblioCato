import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="Login-container">
      <section>
        <h1 id="h1-1">BIENVENIDO</h1>
        <h1 id="h1-2">A LA</h1>
        <h1 id="h1-3">BIBLIOTECA VIRTUAL</h1>
      </section>
      <section>
        <form>
          <h1>Login</h1>
          <label>
            <h2>Código de alumno/docente:</h2>
            <input type="text" name="Fcode" />
          </label>
          <label>
            <h2>Contraseña:</h2>
            <input type="password" name="password" />
          </label>
          <label>
            <input type="checkbox" id="recordarme"/>
            <span>Recuérdame</span>
          </label>
          <button type="submit">INGRESAR</button>
          <a href="">¿Olvidastes tu Contraseña?</a>
        </form>
      </section>
      </div>
  );
}

export default Login;
