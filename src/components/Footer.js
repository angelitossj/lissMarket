import React from "react";
import { Link } from "react-router-dom";
import metodo1 from "../assets/metodo1.png";
import metodo2 from "../assets/metodo2.png";
import metodo3 from "../assets/metodo3.png";
import metodo4 from "../assets/metodo4.png";

const Footer = () => {
  return (
    <div>
      <div className="c-example-divider"></div>
      <footer data-aos="zoom-in-down" className="footer-32892 pb-0">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md pr-md-5 mb-4 mb-md-0">
                <h2>Sobre Nosotros</h2>
                <p className="mb-4">
                 Somos una compañia enfocada en al ambito de ventas de productos , traemos una nueva forma de generar sus compras para su comercio, Unase a Nosotros y gestione sus compras con nuestra interfaz  
                </p>
                <ul className="list-unstyled quick-info mb-4">
                  <li>
                    <Link to="#" className="d-flex align-items-center">
                      <span className="icon mr-3 icon-envelope">
                        <i className="fas fa-phone-square-alt"></i>
                      </span>{" "}
                      +54 9 3704580220
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-flex align-items-center">
                      <span className="icon mr-3 icon-envelope">
                        <i className="fas fa-envelope-open-text"></i>
                      </span>{" "}
                      LissMarket@hotmail.com
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 mb-5 mb-md-0">
                <h2>Metodos de Pago</h2>
                <div className="row gallery">
                  <div className="col-6">
                    <Link to="#">
                      <img src={metodo1} alt="" className="img-fluid" />
                    </Link>
                    <Link to="#">
                      <img src={metodo2} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link to="#">
                      <img src={metodo3} alt="" className="img-fluid" />
                    </Link>
                    <Link to="#">
                      <img src={metodo4} alt="" className="img-fluid" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
