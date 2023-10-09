import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./componentes/Layout";
import Registro from "./pages/Registro/Registro";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className='App'>
      <Layout />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="pages/Login/Login" element={<Login />} />
        <Route path="pages/Registro/Registro" element={<Registro />} />
      </Routes>
    </div>
  );
}

export default App;
