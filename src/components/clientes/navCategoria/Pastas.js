import { React, useEffect, useState } from "react";
import NavBar2 from "../nav/NavProduct";
import Footer from "../../Footer";

import img from "../../../assets/logo2.png"
import swal from "sweetalert";
import MercadoPago from "../../MercadoPago";
const Bebidas = () => {
  const [pedido,setPedido]=useState({})
  const [cart, setCart] = useState([]);
  const [products,setProduct] = useState([])
  const consulta = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const peticion = await fetch("http://localhost:3000/productos?categoria=Enlatados", requestOptions)
    const respuesta = await peticion.json()
    console.log(respuesta)
    setProduct(respuesta?.producto ?? [])
  
    
  }

  function addtocart(item) {
    let cart2 = [...cart];
    cart2.push({ ...item });
    products.map((product) => {
      if (product._id === item._id) {
        product.cart = true;
     
      }
      setCart(cart2);
      console.log(cart)
    });
  }
  function removetocart(item) {
    let cart2 = cart.filter((i) => i._id !== item._id);
    products.map((i) => {
      if (i._id === item._id) {
        i.cart = false;
      }
    });
    setCart(cart2);
  }
  function increase(item) {
   
    let x = cart.map((i) => {
      if (item._id === i._id) {
        i = 1;
        
      }
     
      return i ;
    });
    setCart(x);
  }
  function decrease(item) {
    let x = cart.map((i) => {
      if (item._id === i._id && i._id > 1) {
        
        i._id =  1;
      }
      return i ;
    });
    setCart(x);
  }
  function total() {
    let x = 0;
    cart.map((i) => {
      x += Number(i.precioUnitario) ;
    });
    // if (x){alert('$' + x + " a pagar")}
    
    return x;
  }
  const pagoCompletado = () => {
    swal({
      title: "Pago Completado",
      text: "Su pedido lo espera en el Restaurante",
      icon: "success",
      button: "Genial!",
    });
  };
  let [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value)
  };

  const handleFocusChange = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };

  const enviarPedido = async ()=>{
  
    
    
   setPedido({cart})
  const pedidoArray = pedido.cart ?? []
   console.log("carrito:" + cart)




   let nuevoArray = {}
   
    nuevoArray.pedidos =(await pedidoArray).map(e=>{
      return {idProveedor:e.idProveedor,idProducto:e._id,cantidad:e.precioUnitario,nombreProducto: e.nombreProducto}
    })
    console.log(nuevoArray)
          
    /* const pedidoss = {productos: [
      {idProducto: 2, idProveedor: 5, cantidad: 5, img: ""},
       {idProducto: 6, idProveedor: 5, cantidad: 2, img: ""},
       
      ]} */
  
   var myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   
   var raw = JSON.stringify(nuevoArray);
   console.log(raw)
   
   var requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   };

   const peticion = await fetch ("http://localhost:3000/publicaciones",requestOptions)
   const data = await peticion.json()
   console.log(data)


  }
 


  const processPayment = () => {
    console.log("number => ", state.number);
    console.log("name => ", state.name);
    console.log("expiry => ", state.expiry);
    console.log("cvc => ", state.cvc);
    console.log(JSON.stringify(state));
    pagoCompletado();
    document.getElementById("formTarjeta").reset();
  };
  


    useEffect(() => {
    consulta()
    }, [])


  return (
    <div>
      {/* Modales  */}
      <div
        className="modal fade"
        id="modalTarjeta"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="exampleModalLabel">
                Tarjeta
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
            
              <form id="formTarjeta">
                <div className="form-group">
                  <label htmlFor="number">Número de la tarjeta</label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    maxLength="16"
                    className="form-control"
                    onChange={handleInputChange}
                    onFocus={handleFocusChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    maxLength="30"
                    className="form-control"
                    onChange={handleInputChange}
                    onFocus={handleFocusChange}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="expiry">Fecha de expiración</label>
                    <input
                      type="text"
                      name="expiry"
                      id="expiry"
                      maxLength="4"
                      className="form-control"
                      onChange={handleInputChange}
                      onFocus={handleFocusChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="cvc">CVC</label>
                    <input
                      type="password"
                      name="cvc"
                      id="cvc"
                      maxLength="4"
                      className="form-control"
                      onChange={handleInputChange}
                      onFocus={handleFocusChange}
                    />
                  </div>
                </div>
                {/* <button onClick={processPayment} type="button" className="btn btn-success btn-block btn-lg">Pagar</button> */}
              </form>
            </div>
            <div className="modal-footer">
              <div className="col text-center">
                <button
                  type="button"
                  onClick={(pagoCompletado, processPayment)}
                  className="btn btn-danger btn-block btn-lg"
                >
                  Pagar
                </button>
                <img alt="" src={img} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalPedidos"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="col text-center">
                <h1 className="modal-title" id="exampleModalLabel">
                  Carrito
                </h1>
                <h2>TOTAL:$ {total()}</h2>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"></div>
            <div className="modal-footer">
              <div className="modal-body p-5 pt-0">
                <form className="">
                  <div className="form-floating mb-3">
                    <div className="col text-center">
                      <div className="card" style={{ width: "24rem" }}>
                        {/* <img src={tarjeta} className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                          <h5 className="card-title">Tarjeta</h5>
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#modalTarjeta"
                          >
                            Comprar
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col text-center">
                      <div className="card " style={{ width: "24rem" }}>
                        {/* <img src={efectivo} className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                          <h5 className="card-title">Efectivo</h5>
                          <button
                            type="button"
                            onClick={pagoCompletado}
                            className="cerrarsesion btn btn-danger"
                          >
                            Comprar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="col text-center">
                  <img alt="" src={img} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavBar2 />
      <div className="container mt-2">
        <div className="col text-center">
        <div  class="head2">Realizar Pedidos</div>
            <p class="bdr2"></p>
        </div>
        <br />
        <div className="row justify-content-center">
          {products.map((item) => (
            <div className="col-sm-12  col-md-4 col-lg-3" key={item._id}>
              <div className="separacionBebidas card">
                <img alt="" src={item.imagen} className="tamañoCardBebidas card-img-top img-height" />
                <div className="card-body">
                  <h6 className="card-title">
                    {item.nombreProducto} - $ {item.precioUnitario}
                  </h6>
                 
                    {item.cart !== true && <button
                      className="botoncitoBebidas btn btn-primary"
                      onClick={() => addtocart(item)}
                      
                    >
                      Agregar a la lista
                    </button>}
                  
                  {item.cart===true && (
                    <button
                      className="btn btn-success"
                      onClick={() => addtocart(item)}
                    >
                      Agregar Otro
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>


                      
<div className="cho-container"></div>

<div className="col text-center">
                <h1 className="modal-title" id="exampleModalLabel">
                  Carrito
                </h1>
                <h2>TOTAL:$ {total()}</h2>
              </div>

        <div className="row mt-3">
          <table className="table  text-center">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Producto</th>
                <th scope="col">Nombre del producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((i, index) => (
                <tr key={i.id}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">
                    <img alt="" src={i.imagen} style={{ width: "4rem" }} />
                  </th>
                  <td>{i.nombreProducto}</td>
                  <td>{i.precioUnitario}</td>
                  <td>
                    {/* <button
                      onClick={() => decrease(i)}
                      className="btn btn-danger btn-sm"
                    >
                      -
                    </button>
                    {i.quantity}
                    <button
                      onClick={() => increase(i + 1)}
                      className="btn btn-primary btn-sm"
                      size="sm"
                    >
                      +
                    </button> */}
                    <input onChange={(e)=>console.log(e.target.value)} name="cantidad" type='number'></input>
                  </td>
                
                  <td>
                    <button
                      onClick={() => removetocart(i)}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
        <div className="row">
          <div className="col text-center">
            <button onClick={enviarPedido}
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#modalPedidos"
            >
              Completar Pago
            </button>
            <button onClick={total}
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#modalPedidos"
            >
              total Pago
            </button>
           
            
            <br />
          </div>
          <br />
        </div>
        <br />
      </div>
      <br />
      <Footer />
    </div>
  );
};
export default Bebidas;