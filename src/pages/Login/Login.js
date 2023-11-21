import React, { useState } from "react";
import "./Login.css";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Fcode: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const secretKey = 'PUCHICANAS';

      const encryptedPassword = CryptoJS.AES.encrypt(formData.password, secretKey).toString();

      const dataToSend = { ...formData, password: encryptedPassword };
  
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
  
      const data = await response.json();
  
      if (data.success) {
        localStorage.setItem('userInfo', JSON.stringify(data.user));
        navigate("/pages/Inicio/Inicio");
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
            <input
              type="text"
              name="Fcode"
              value={formData.Fcode}
              onChange={handleChange}
            />
          </label>
          <label>
            <h2>Contraseña:</h2>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <label className="checkbox-label">
            <input type="checkbox" />
            <span>Recuérdame</span>
          </label>
          <button
            className="btm-inicio"
            type="button"
            onClick={handleLogin}
          >
            INGRESAR
          </button>
          <a href="">¿Olvidaste tu Contraseña?</a>
        </form>
      </section>
    </div>
  );
}

export default Login;