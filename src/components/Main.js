import React,{useState} from 'react'
// import './product.css'

import img from '../assets/imgInfo.jpg'

import Registro from '../components/proveedores/RegistroProveedor'
import Login from './clientes/formularios/LoginCliente'
import RegistroCliente from '../components/clientes/RegistroCliente'
const Main = () => {
const [mostrar,setMostrar]=useState(null)
const  muestra = ()=>setMostrar(<RegistroCliente/>)
const registro = ()=>setMostrar([<Registro/>])
      
  const consulta = async ()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
   
   
      const respuesta=await fetch('http://localhost:3000/usuario', requestOptions)
  
      const result =await respuesta.json()
     console.log(result)
      console.table(result.user)
      //funcion map()=>devuelve un nuevo arreglo con los valores elegidos por cada elemento del arreglo que le estemos pasando
      //recibe hasta 3 elementos
      const nuevoResult = result.user.map((item,index)=>{
        return {
          nombre: item.nombre,
          email: item.email,
          usuario:item.usuario,
          index:index
        }
      })
      
      console.log(nuevoResult)
  
   }
   
  
  return (
    <>
    {mostrar}
<div className="px-4 my-5 text-center border-bottom">
<h1  className="textBienvenidos display-4 fw-bold">Bienvenidos a <span className="textofer display-5 liss">
              ¡LissMarket!
            </span></h1>
  

    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4 rancia">Queremos Brindarle la mejor atencion posible y que pueda disfrutar de la interacion con nosotros pero para ello es necesario que Usted forme parte de nosotros y se registre a nuetra Pagina</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button onClick={muestra} type="submit" className="btn btn-danger btn-lg px-4 me-sm-3">Cliente</button>
        <button type="submit" onClick={registro} className="btn btn-outline-danger btn-lg px-4">Proveedor</button>
      </div>
    </div>
    <div class="overflow-hidden">
      <div class="container px-5">
        <img src={img}  class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example" width="700" height="500" loading="lazy"/>
      </div>
    </div>
  </div>
   
    
    </>
  )
}

export default Main