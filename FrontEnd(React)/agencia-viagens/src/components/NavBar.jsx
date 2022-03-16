
import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#009c3b' }}>
        <div className="container-fluid">
          <a className="navbar-brand " ><Link className="navbar-brand" to='/'>Brasil Sem Fronteiras</Link></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item ">
                <a >
                  <Link className="nav-link" to='/Locais'>Destinos</Link>
                </a>
              </li>
              <li className="nav-item">
                <a >
                  <Link className="nav-link" to='/Promocoes'>Promoções</Link>
                </a>
              </li>
              <li className="nav-item">
                <a >
                  <Link className="nav-link" to='/Suporte-Create'>Fale conosco</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}



export default NavBar;