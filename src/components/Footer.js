import React from "react";
import { Link } from "react-router-dom";
import metodo1 from "../assets/metodo1.png";
import metodo2 from "../assets/metodo2.png";
import metodo3 from "../assets/metodo3.png";
import metodo4 from "../assets/metodo4.png";
import email from "../assets/gmail.png"
import phone from "../assets/telefono-inteligente.png"

const Footer = () => {
  return (
    <div>
      <div className="c-example-divider"></div>

      <div class=" container-fluid">
        <div >
          <div class="heading text-center">
            <div  class="head1">Sobre Nosotros</div>
            <p class="bdr"></p>
          </div>
          <div class="card-body">
            <div class="otro2 row m-0 pt-5">
              <div  class="card col-12 col-md-3">
                <div class="">
                  <div class="card-title">¿QUIENES SOMOS?</div>
                  <p>
                    <small className="textFoot">
                      Somos una compañia enfocada en al ambito de ventas de
                      productos , traemos una nueva forma de generar sus compras
                      para su comercio, Unase a Nosotros y gestione sus compras
                      con nuestra interfaz
                    </small>
                  </p>
                </div>
              </div>
              <div  class="otro card col-12 col-md-3">
                <div class="card-content">
                  <div class="card-title">CONTACTANOS</div>
                  <ul className="otro list-unstyled quick-info mb-4">
                    <li className="iconText">
                      <img className="iconitoFooter" src={phone} alt=""/>
                      <Link to="#" className="aa d-flex align-items-center">
                         +54 9
                        3704580220
                      </Link>
                    </li>
                    <li className="iconText">
                    <img className="iconitoFooter" src={email} alt=""/>
                      <Link to="#" className="aa d-flex align-items-center">
                        
                        LissMarket@hotmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div  class="otro card col-12 col-md-5">
                <div class="card-content">
                  <div class="card-title">METODOS DE PAGO</div>
                  <div className="row gallery">
                    <div className="col-6">
                      <Link to="#">
                        <img src={metodo1} alt="" className="img-fluida" />
                      </Link>
                      <Link to="#">
                        <img src={metodo2} alt="" className="img-fluida" />
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="#">
                        <img src={metodo3} alt="" className="img-fluida" />
                      </Link>
                      <Link to="#">
                        <img src={metodo4} alt="" className="img-fluida" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
