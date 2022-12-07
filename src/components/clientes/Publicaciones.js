import React,{useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import { Session } from '../../context/Session';
import Footer from '../Footer';
import swal from 'sweetalert';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';



function App() {
    const [state,setState] = useContext(Session)
    const navigate = useNavigate();
  
    const InicioSesionExitosa=(token)=>{
      swal({
        title:'Inicio de Sesión Exitosa',
        text:'Bienvenido',
        icon:'success',
        timer:'1000',
        showCancelButton: false,
        showConfirmButton: false
      }).then(()=>{
        //Almacenamiento del token y redirección después de 3 segundos
       
  
      }
      );
    }
  
      
  
      const opciones =  {
      method:'POST',
      headers:{'Content-Type': 'application/json'}
    }
     
      //Método para la redirección
    
    // const [estado,setEstado]= useState({
    //   usuario:"",
    //   password:""
    // });
  
    const {usuario,password}=state
    const handleInput = ({ target }) => {
      setState({
          ...state,
          [target.name]: target.value
        })
        console.log(target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
   
   
  
  
    (async () => {
        // Se modifican las opciones del fetch, añadiendo los datos del formulario
        opciones.body = JSON.stringify({ usuario, password })
       console.log({usuario})
  
        const resp = await fetch('http://localhost:3000/log', opciones)
  
        // Si el ok es false, significa que se produjo un error en la petición
        if (!resp.ok) alert('Revise las credenciales y vuelva a intentarlo');
       
  
        const data = await resp.json()
  
        const info = {
          token:data.token,
          user:usuario
        }
     
     
        
        console.log(data.token);
        console.log(data.usuario)
        if (data.token){
          localStorage.setItem('rstoken',data.token)
          console.log(localStorage)
          InicioSesionExitosa(data.token)
          navigate('/homeCliente');
        }
        setState({info})
        
  
  
        
        
      
      
     
       
       
      
  
    })()
}

  return (
    <>
    <MDBContainer className="my-5">

<MDBCard>
  <MDBRow className='g-0'>

    <MDBCol md='6'>
      <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
    </MDBCol>

    <MDBCol md='6'>
      <MDBCardBody className='d-flex flex-column'>

        <div className='d-flex flex-row mt-2'>
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
          <span className="h1 fw-bold mb-0">LissMarket</span>
        </div>

        <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Realice su publicacion de producto</h5>

          <form onSubmit={handleSubmit}>
          <MDBInput onChange={handleInput} wrapperClass='mb-4' label='Nombre Producto address' name='usuario' id='formControlLg' type='email' size="lg"/>
          <MDBInput onChange={handleInput} wrapperClass='mb-4' label='Categoria Producto' id='formControlLg' name='password' type='text' size="lg"/>
          <MDBInput onChange={handleInput} wrapperClass='mb-4' label='cantidad de Producto' id='formControlLg' name='cantidad' type='text' size="lg"/>

          <button NavLink=''  className="w-100 btn btn-lg btn-primary" onClick={handleSubmit} type="submit">Realizar Publicacion</button>

          </form>
        <a className="small text-muted" href="#!">Olvido su contraseña?</a>
        <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>No tiene cuenta? <a href="#!" style={{color: '#393f81'}}>Registrarse</a></p>

        <div className='d-flex flex-row justify-content-start'>
          <a href="#!" className="small text-muted me-1">Condiciones de uso.</a>
          <a href="#!" className="small text-muted">Política de privacidad</a>
        </div>

      </MDBCardBody>
    </MDBCol>

  </MDBRow>
</MDBCard>

</MDBContainer>
<Footer/>
    
    </>
  );
}

export default App;