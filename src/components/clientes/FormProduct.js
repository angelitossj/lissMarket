import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {NavLink} from 'react-router-dom'
import {useState,useEffect} from 'react'

import Card from 'react-bootstrap/Card';
import Buscador from './Buscador';

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

    const peticion = await fetch(`http://localhost:3000/productos`, requestOptions)
    const respuesta = await peticion.json()
  
    setMostrar(respuesta?.producto ?? [])
    
    
    
  }
  useEffect(() => {
    consulta()
    
    
    
  }, []);
  
  const muestra = ()=>{
   const newe =  mostrar.filter(resul => resul.categoria === "Lacteos")
   console.log(newe)
  }

  return (
  <>
    <Buscador/>
    {/* <Form.Label>Ingrese un producto Deseado</Form.Label>
    <Form.Select onChange={handleInput} aria-label="Default select example">
      <option >seleccione una categoria</option>
      <option value="Bebidas">Bebidas</option>
      <option value="Lacteos">Lacteos</option>
      <option value="Panificado">Panificados</option>
      <option value="Carnicos">Carnicos</option>
      <option value="Pastas">Pastas</option>
    </Form.Select> */}
      <button onClick={muestra}  type='submit'>consulta</button>
      
   
    
   {mostrar.map((item)=>(
     <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={item.imagen} />
     <Card.Body>
       <Card.Title>Producto</Card.Title>
       <Card.Text>
        {item.nombreProducto}
       </Card.Text>
       <Button variant="primary">Mas informacion</Button>
     </Card.Body>
   </Card>


   ))}
  
    
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