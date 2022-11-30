import React from "react";
import img from "../img/WhatsApp Image 2022-11-30 at 08.41.46.jpeg";
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
                  <img
                    src={img}
                    alt=""
                    className="logoNav"
                    width="230"
                    height="130"
                    role="img"
                    aria-label="imagen"
                  />
                </Link>

                <ul className="ulnav nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  <li>
                    <Link to="/" className=" nav-link px-2 text-dark">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link to="/home2" className=" nav-link px-2 text-dark">
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link to="/pedidos" className=" nav-link px-2 text-dark">
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link to="/menu" className=" nav-link px-2 text-dark">
                      Menu
                    </Link>
                  </li>
                </ul>

                <div className="text-end">
                  <button type="button" className="cerrarsesion btn btn-danger">
                    Cerrar Sesion
                  </button>
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
