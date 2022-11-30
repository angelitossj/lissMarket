import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import {useState,useEffect} from 'react'
function Buscador() {
const [state, setState] = useState([]);


  //funcion de busqueda
  const searcher = (e) => {
    setState(e.target.value)
    console.log(e.target.value)
  }
  const consulta= async () => {
    
   
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
    const Result = state.filter(result=>result.categoria === "Pastas" )
    console.log(Result)

    setState(respuesta?.producto ?? [])

  }

  useEffect(() => {
    consulta()
  }, []);

  return (
    <Stack direction="horizontal" gap={3}>
    <div className="input-group mb-3 shadow-sm p-3 mb-5 bg-body rounded">
        <span className="input-group-text" id="inputGroup-sizing-default">Buscador</span>
        <input onChange={searcher}  type= "text" placeholder="Ingresa un Nombre..." className="form-control "/>
        <button onClick={consulta} type='submit'>enviar</button>
      </div>
    </Stack>
  );
}

export default Buscador;