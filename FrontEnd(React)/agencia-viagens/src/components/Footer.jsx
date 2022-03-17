import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (

        <div className="container-fluid p-2 text-center footer ">
            <h6 className="text-warning">Agência de Viagens Brasil sem fronteiras &copy;</h6>
            <a >
                <Link className="nav-link text-warning " to='/Adm'>Acesso Restrito 🔒</Link>
            </a>
        </div>
    );
}

