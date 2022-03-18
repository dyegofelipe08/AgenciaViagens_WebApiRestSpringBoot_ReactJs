
import React, { useState } from "react";
import { Link } from "react-router-dom";


function NavBar() {


  return (
    <header>

      <nav className="navbar navbar-expand-lg my-0 BgcolorGradientNavBar shadowNavBar " style={{color:'yellow'}}>
        <div className="container-fluid ">
          <a className="navbar-brand " ><Link className="navbar-brand text-warning" to='/'>Brasil Sem Fronteiras</Link></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item ">
                <a >
                  <Link className="nav-link text-warning" to='/Destinos'>Destinos</Link>
                </a>
              </li>
              <li className="nav-item">
                <a >
                  <Link className="nav-link text-warning" to='/DestinosPromo'>Promoções</Link>
                </a>
              </li>
              <li className="nav-item">
                <a >
                  <Link className="nav-link text-warning" to='/SuporteUsuario'>Fale conosco</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>




  );
}



export default NavBar;