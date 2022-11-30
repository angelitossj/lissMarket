import React from "react";
import gifbicho from "../img/busqueda_bicho.gif"
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ExampleModal= ({show, handleClose, descripcion_plaga, estacion_plaga, metodo_plaga, nombre_plaga}) =>{

  return(

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{nombre_plaga}</Modal.Title>
    </Modal.Header>
    <Modal.Body>

    <p className="text" >Descripcion:</p>
      <p className="text">{descripcion_plaga}</p>
      <p className="text">Estacion:</p>
      <p className="card-text">{estacion_plaga} </p>
      <p className="text">Metodos:</p>
      <p className="card-text">{metodo_plaga}</p>


    </Modal.Body>
    <Modal.Footer>
    </Modal.Footer>
  </Modal>

  )


}

const InfoPlagas =({nombre_plaga, descripcion_plaga, estacion_plaga, metodo_plaga, img_plagas}) => {

  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card  shadow p-3 mb-5 bg-body rounded">
        <img
          className=" w-100 center imagen1Plaga d-block mx-auto mb-2"
          alt=""
          src={img_plagas}
      
        />
        <div className="card-body">
          <p className="text">Nombre:</p>
          <p className="card-text">{nombre_plaga}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
            </div>
          </div>
        </div>
        <Button className=" btn btn-success" onClick={handleShow}>
          Mas informacion
        </Button>
        <ExampleModal show={show} handleClose={handleClose} descripcion_plaga={descripcion_plaga} estacion_plaga={estacion_plaga} metodo_plaga={metodo_plaga} nombre_plaga={nombre_plaga}/>
      </div>
    </div>
  )
}

const Info = () => {

 
  const [search, setSearch] = useState("")

  const [plagas, setPlagas ] = useState(null)
  useEffect(() =>{
    fetch("http://127.0.0.1:4000/auth/InfoPlagas")
    .then(res => res.json())
    .then (data =>{
      setPlagas(data);
      // console.log(data)
    })

  },[])

  //funcion de busqueda
  const searcher = (e) => {
    setSearch(e.target.value)
    // console.log(e.target.value)
  }

  //metodo de filtrado

  const Results = !search ? plagas : plagas.filter((dato)=> dato.nombre_plaga.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <main>

   
      <h1 className="visually-hidden">Heroes examples</h1>

      <div className="px-4 py-5 my-5 text-center" data-aos="fade-up">
        <img
          data-aos="zoom-in"
          className="imgcentral d-block mx-auto mb-4"
          alt=""
          width="72"
          src={gifbicho}
          height="57"
        />
        <div className="col-lg-5 mx-auto ">
          <p className="fuentetexto lead mb-2">
            <strong>
              ¡En esta seccion va a tener informacion sobre las plagas mas
              conocidas!{" "}
            </strong>
          </p>
        </div>
        
        <div className="input-group mb-3 shadow-sm p-3 mb-5 bg-body rounded">
        <span className="input-group-text" id="inputGroup-sizing-default">Buscador</span>
        <input  value={search} onChange={searcher} type= "text" placeholder="Ingresa un Nombre..." className="form-control "/>
      </div>

      </div>
   
    
      <div className="container my-5" data-aos="fade-up">
        {plagas &&
        <div className="album py-3 bg-light">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
       
          {/* <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
              <p className="text">Nombre</p>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="text">Descripcion</p>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="text">Estacion</p>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="text">Metodo</p>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                </div>
              </div>
            </div>
          </div> */}
            {Results.map((plaga, index)=> 
              <InfoPlagas key={index} {...plaga} />
              // <p key={index}>{plaga.nombre_plaga}</p>
            ) }

     
      </div>
      </div>
      </div>
      } 
      </div>

     
    </main>
  );
};

export default Info;