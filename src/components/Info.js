import React from 'react'
import img1 from "../img/como-ser-comerciante.jpg";
import img2 from "../img/png-transparent-vendor-computer-icons-supplier-angle-textile-logo-thumbnail.png";
import img3 from "../img/logoproveedor.png";
const Info = () => {
  return (
   <>
        
        <section data-aos="fade-up" className="py-5 text-center container">
        <div className="">
          <div className="linea-separadora"></div>
          <h1 className="fw-light">Nuestros increíbles servicios</h1>
        </div>
      </section>
      <div className="album py-5 bg-white">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div data-aos="zoom-in-down" className="card shadow-sm">
                <img
                  src={img1}
                  className="imgcard bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  role="img"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  alt=""
                />
                <div className="card-body">
                  <p className="card-text">
                    Ofrecemos a nuestros clientes un servicio de excelente calidad
                    para realizar sus compras de stokc de manera mas rapida.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div data-aos="zoom-in-down" className="card shadow-sm">
                <img
                  src={img2}
                  className="imgcard bd-placeholder-img card-img-top"
                  width="100%"
                  height="200"
                  role="img"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  alt=""
                />
                <div className="card-body">
                  <p className="card-text">
                   Ofrecemos atencion a todos aquellos proveedores que quieran administrar sus productos y tener un contacto mas directo con el cliente .
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div data-aos="zoom-in-down" className="card shadow-sm">
                <img
                  src={img3}
                  alt=""
                  className="imgcard bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  role="img"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                />
                <div className="card-body">
                  <p className="card-text">
                  Contamos con un modulo de mensajes para que usted pueda realizar su compra en tiempo real con todos los proveedores conectados a nuestra Base de Datos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
   </>
  )
}

export default Info