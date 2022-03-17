import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (

        <div >
            <footer className=" text-center footer BgColorGradientFooter">
            <h6 className="text-warning pt-2">Agência de Viagens Brasil sem fronteiras &copy;</h6>
            <a >
                <Link className="nav-link text-warning p-0 " to='/Adm'>Acesso Restrito 🔒</Link>
            </a>
            </footer>
        </div>
            
           
    );
}

