import { React, useEffect, useState } from "react";
import NavBar2 from "../../components/clientes/nav/NavProduct";
import Footer from "../../components/Footer";

import img from "../../assets/logo2.png"
import swal from "sweetalert";

const Pedidos = () => {
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

    const peticion = await fetch("http://localhost:3000/product", requestOptions)
    const respuesta = await peticion.json()
    console.log(respuesta)
    setProduct(respuesta?.producto ?? [])
    console.log(products)
    
  }

  function addtocart(item) {
    let cart2 = [...cart];
    cart2.push({ ...item });
    products.map((product) => {
      if (product._id === item._id) {
        product.cart = true;
        console.log(product)
      }
    });
    setCart(cart2);
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
      x += i.price * i.quantity;
    });
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
  };

  const handleFocusChange = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };

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
        tabindex="-1"
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
        tabindex="-1"
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
          <h1>Realizar Pedidos</h1>
        </div>
        <br />
        <div className="row justify-content-center">
          {products.map((item) => (
            <div className="col-3" key={item.id}>
              <div className="card">
                <img alt="" src={item.imagen} className="card-img-top img-height" />
                <div className="card-body">
                  <h6 className="card-title">
                    {item.nombreProducto} - $ {item.precioUnitario}
                  </h6>
                 
                    {item.cart !== true && <button
                      className="btn btn-primary"
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


                      
<div class="cho-container"></div>



        <div className="row mt-3">
          <table className="table  text-center">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Product</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Remove</th>
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
                    <button
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
                    </button>
                  </td>

                  <td>
                    <button
                      onClick={() => removetocart(i)}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col text-center">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#modalPedidos"
            >
              Completar Pago
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
export default Pedidos;
