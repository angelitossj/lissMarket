import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../img/BLOG_Imagens-Google_como-pesquisar-no-Google-usando-imagens-670x419-1.png'
import { useState ,useEffect} from 'react'
import './CardCliente.css'
function BasicExample() {
  const [mostrar, setMostrar] = useState([])
  const consulta = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const peticion = await fetch("http://localhost:3000/publicaciones", requestOptions)
    const respuesta = await peticion.json()

    console.log(respuesta.publicaciones)
    setMostrar(respuesta.publicaciones)
  }

  useEffect(() => {
    consulta()
    
    
  }, []);
  return (
    <>
      <div className='ms-sm-5 me-sm-4 me-2 py-5 ps-5'>
        <div className='row w-md-75 ms-auto'>
          {mostrar.map((item, index) => (
            <div className='col-12 col-md-6 col-lg-4'>
              <Card className=''>
                <Card.Title className='text-center'>Lista de Proveedores</Card.Title>
                <div className='container py-3 px-4'>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>

                    <Card.Title>{item.nombreProducto}</Card.Title>
                    <Card.Text>
                      {item.usuario}
                      {item.domicilioEmpresa}

                    </Card.Text>
                    <Card.Text>
                      {item.telefono}
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

export default BasicExample;