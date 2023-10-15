import React, { useEffect } from 'react';
import Layout from "../../componentes/Layout";
import Registro from "./Registro";
import "../Login/LoginPage.css"

function RegistroPage() {

    useEffect(() => {
        document.body.classList.add('image-background');
        document.body.classList.remove('white-background');
        return () => {
            document.body.classList.remove('image-background');
            document.body.classList.add('white-background');
        };
        }, []);

    return (
        <div>
        <Layout />
        <Registro />
        </div>
    );
}

export default RegistroPage;