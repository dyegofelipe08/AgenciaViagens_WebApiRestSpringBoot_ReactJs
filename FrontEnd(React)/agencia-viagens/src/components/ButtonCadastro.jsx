import React from "react";
import { Link } from "react-router-dom";

export default function ButtonCadastro() {

    return (
        <div className="text-center">
            <button className="btn btn-success rounded-3 shadowButton "><Link className="nav-link" to='/CadastroUsuario' ><p className="lead m-0">Cadastre-se</p></Link></button>
        </div>
    )

}