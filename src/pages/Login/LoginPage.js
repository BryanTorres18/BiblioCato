import React, { useEffect } from 'react';
import Layout from "../../componentes/Layout";
import Login from "./Login";
import "./LoginPage.css"

function LoginPage() {

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
        <Login />
        </div>
    );
}

export default LoginPage;
