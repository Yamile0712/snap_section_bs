import React from "react";
import { Header } from "../components/Header.jsx";

export const Registre = () => {
    return (
        <>
            <Header />
            <form className="container w-50 mt-5 bg-body-secondary p-5 rounded-3">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nombre de usuario</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">agrega # o - _ para separar o dejar espacios</div>
                </div>  
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Crea contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirmar Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}