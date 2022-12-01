import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {NavLink} from 'react-router-dom'
import {useState,useEffect} from 'react'
import NavProduct from '../nav/NavProduct'

import Card from 'react-bootstrap/Card';


function FormProduct() {
    const [mostrar, setMostrar] = useState([])
    
  const handleInput = ({ target }) => {
      
      
      setMostrar({
          ...mostrar,
          [target.name]: target.value
        })
        console.log(target.value)
      
};
  const consulta = async () => {
 
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const peticion = await fetch(`http://localhost:3000/productos?categoria=Pastas`, requestOptions)
    const respuesta = await peticion.json()
  
    setMostrar(respuesta?.producto ?? [])
    
    
    
  }
  useEffect(() => {
    consulta()
    
    
    
  }, []);
  
 

  return (
  <>
   
    {/* <Form.Label>Ingrese un producto Deseado</Form.Label>
    <Form.Select onChange={handleInput} aria-label="Default select example">
      <option >seleccione una categoria</option>
      <option value="Bebidas">Bebidas</option>
      <option value="Lacteos">Lacteos</option>
      <option value="Panificado">Panificados</option>
      <option value="Carnicos">Carnicos</option>
      <option value="Pastas">Pastas</option>
    </Form.Select> */}
        <NavProduct/>
  
      
        <div className='ms-sm-5 me-sm-4 me-2 py-5 ps-5'>
        <div className='row w-md-75 ms-auto'>
          {mostrar.length > 1&&mostrar?.map((item, index) => (
            <div className='col-12 col-md-6 col-lg-3 mb-3' key={item._id}>
              <Card className=''>
                <Card.Title className='text-center'>Producto</Card.Title>
                <div className='container py-3 px-4'>
                  <Card.Img className='img' variant="top" src={item.imagen} />
                  <Card.Body>
               
                    <Card.Title>{item.nombreProducto}</Card.Title>
                    <Card.Text>
                      {"Marca : " + item.marca}
                     

                    </Card.Text>
                    <Card.Text>
                      
                      {"Categoria : "+item.categoria}

                    </Card.Text>
                    <Card.Text>
                      {"Precio X unidad : "+item.precioUnitario}
                    </Card.Text>
                    <Button variant="primary">Mas informacion</Button>
                  </Card.Body>
                </div>
              </Card>
            </div>
              ))}
        </div>
      </div>
    

  
    
{/* {

  ( mostrar?.length <= 1 && mostrar)
  ? (
    <p>Loading...</p>
  )
  : (
    mostrar?.map(async(product) => (
      <div 
      key={product._id}
      className="card">
        <div className='card-title'>
          {product.nombreProducto}
        </div>
      </div>
    ))
  )

} */}
  </>
    
  );
}

export default FormProduct;