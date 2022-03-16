import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (

        <div className="container-fluid p-2 
         text-center footer "
            style={{
                backgroundColor: '#002776',
                width: '100%',
                height: '100%',
                position: 'relative',
                bottom: 0,
                left: 0,
                lineHeight: '5rem',
                flexShrink: 0
            }}>
            <h6 className="text-warning">Agência de Viagens Brasil sem fronteiras &copy;</h6>
            <a >
                <Link className="nav-link text-warning " to='/Adm'>Acesso Restrito 🔒</Link>
            </a>
        </div>
    );
}

