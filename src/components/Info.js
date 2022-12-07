import React from "react";
import img1 from "../img/como-ser-comerciante.jpg";
import img2 from "../assets/proveedor.jpg";
import img3 from "../assets/mensajes.jpg";
const Info = () => {
  return (
    <>
      <section data-aos="fade-up" className=" text-center container">
        <div className="">
          <h1 className="textito2">Nuestros increíbles servicios</h1>
          <p className="lineaSeparadora"></p>
        </div>
      </section>
      <div className="album py-5 bg-white">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
            <div className="col">
              <div data-aos="zoom-in-down" className="cardServi card shadow-sm">
                <img
                  src={img1}
                  className="imgcard bd-placeholder-img card-img-top"
                  role="img"
                  alt=""
                />
                <div className="card-body">
                  <p className="card-text">
                    Ofrecemos a nuestros clientes un servicio de excelente
                    calidad para realizar sus compras de stokc de manera mas
                    rapida.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div data-aos="zoom-in-down" className="cardServi card shadow-sm">
                <img
                  src={img2}
                  className="imgcard bd-placeholder-img card-img-top"
                  role="img"
                  alt=""
                />
                <div className="card-body">
                  <p className="card-text">
                    Ofrecemos atencion a todos aquellos proveedores que quieran
                    administrar sus productos y tener un contacto mas directo
                    con el cliente .
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div data-aos="zoom-in-down" className="cardServi card shadow-sm">
                <img
                  src={img3}
                  alt=""
                  className="imgcard bd-placeholder-img card-img-top"
                  role="img"
                />
                <div className="card-body">
                  <p className="card-text">
                    Contamos con un modulo de mensajes para que usted pueda
                    realizar su compra en tiempo real con todos los proveedores disponibles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
