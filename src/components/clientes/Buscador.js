import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import {useState,useEffect} from 'react'

import Card from 'react-bootstrap/Card';
function Buscador() {
const [state, setState] = useState([]);
const [filtro,setFiltro]=useState([])


  //funcion de busqueda
  const searcher = async (e) => {
    setState(e.target.value)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'

    };

    const peticion = await fetch(`http://localhost:3000/productos`, requestOptions)
    const respuesta = await peticion.json()
    console.log(respuesta)
    const Result = state.filter(result=>result.categoria === e.target.value )
  
    setFiltro(Result)
    console.log(Result)
    setState(respuesta?.producto ?? [])
    
  }
  // const consulta= async () => {
    
   
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   var requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     redirect: 'follow'
  //   };

  //   const peticion = await fetch(`http://localhost:3000/productos`, requestOptions)
  //   const respuesta = await peticion.json()
  //   console.log(respuesta)
  //   const Result = state.filter(result=>result.categoria === "Pastas" )
  
  //   setFiltro(Result)
  //   console.log(filtro)
  //   setState(respuesta?.producto ?? [])

  // }

  useEffect(() => {
    searcher()
  }, []);

  return (
 <>
    <Stack direction="horizontal" gap={3}>
    <div className="input-group mb-3 shadow-sm p-3 mb-5 bg-body rounded">
        <span className="input-group-text" id="inputGroup-sizing-default">Buscador</span>
        <input onChange={searcher}  type= "text" placeholder="Ingresa un Nombre..." className="form-control "/>
        <button onClick={searcher} type='submit'>enviar</button>
      </div>
    </Stack>
    <div className='ms-sm-5 me-sm-4 me-2 py-5 ps-5'>
        <div className='row w-md-75 ms-auto'>
          {filtro.length > 1&&filtro?.map((item, index) => (
            <div className='col-12 col-md-6 col-lg-4' key={item._id}>
              <Card className=''>
                <Card.Title className='text-center'>Producto</Card.Title>
                <div className='container py-3 px-4'>
                  <Card.Img variant="top" src={item.imagen}/>
                  <Card.Body>
               
                    <Card.Title>{item.nombreProducto}</Card.Title>
                    <Card.Text>
                      {"Marca : " + item.marca}
                     

                    </Card.Text>
                    <Card.Text>
                      
                      {"Categoria : "+item.nombreProducto}

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
 
 </>
  );
}

export default Buscador;