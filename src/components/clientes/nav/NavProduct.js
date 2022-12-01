import React from "react";

import { Link } from "react-router-dom";

const NavBar2 = () => {
  return (
    <div>
      <div>
        <main>
          <header className="p-3 bg-while text-white">
            <div className="container-liss">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start mx-auto ">
                <Link
                  to="/home"
                  className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                >
                  {/* <img
                    src={img}
                    alt=""
                    className="logoNav"
                    width="230"
                    height="130"
                    role="img"
                    aria-label="imagen"
                  /> */}
                </Link>

                <ul className="ulnav nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                    <Link to="/homeCliente" className=" nav-link px-2 text-dark">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/bebidas" className=" nav-link px-2 text-dark">
                      Bebidas
                    </Link>
                  </li>
                  <li>
                    <Link to="/lacteos" className=" nav-link px-2 text-dark">
                      Lacteos
                    </Link>
                  </li>
                  <li>
                    <Link to="/panificado" className=" nav-link px-2 text-dark">
                      Panificados
                    </Link>
                  </li>
                  <li>
                    <Link to="/comestible" className=" nav-link px-2 text-dark">
                      Comestibles
                    </Link>
                  </li>
                  <li>
                    <Link to="/pastas" className=" nav-link px-2 text-dark">
                      Pastas
                    </Link>
                  </li>
                  <li>
                    <Link to="/carnicos" className=" nav-link px-2 text-dark">
                      Carnicos
                    </Link>
                  </li>
                </ul>

                <div className="text-end">
                  {/* <button type="button" className="cerrarsesion btn btn-danger">
                    Cerrar Sesion
                  </button> */}
                </div>
              </div>
            </div>
          </header>
          <div className="c-example-divider"></div>
        </main>
      </div>
    </div>
  );
};

export default NavBar2;
