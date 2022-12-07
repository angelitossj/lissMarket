import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import img from '../../assets/logo.png'
const Registro = () => {
  
const opciones={
  method:'POST',

  headers:{
    'Content-Type': 'application/json'
  }



}
const navigate = useNavigate();
const [registro,setRegistro] = useState({
            nombreOrazonSocial:"",
            cedulaIdentidad:"",
            DomicilioEmpresa:"",
            usuario:"",
            telefono:"",
            email:"",
            password:""
});
const handleInput=({target})=>{
  setRegistro({
    ...registro,
    [target.name]: target.value
  })
  console.log(target.value)
}
const handleSubmit= (event)=>{
  event.preventDefault();

(async ()=>{


opciones.body=JSON.stringify(registro)
const resp = await fetch('http://localhost:3000/proveedores', opciones)

if(!resp.ok)alert('Revise las credenciales y vuelva a intentar')

const data = await resp.json()

console.log(data)
navigate('/proveedor')

})()
}

  return (
    <>
     <main className="form-signin mx-auto w-25 my-5">
          <form className="text-center" >
            <div className="mb-4">
                <img
                className=""
                src={img}
                alt=""
                width="100"
                height="100"
                />
            </div>
            <h1 className="h3 mb-3 fw-normal text-center"><strong>Formulario Proveedor</strong></h1>
          


            <div className="form-floating my-3">
              <input onChange={handleInput}
                name="nombreOrazonSocial"
                
                type="text"
                placeholder="Nombre/RazonSocial"
                
                // {...register('nombre_usuario')}
                className={`form-control `}

                
              />
              <label htmlFor="floatingInput">Nombre/RazaSocial</label>
              <div className="invalid-feedback"></div>
            </div>

            <div className="form-floating my-3">
              <input onChange={handleInput}
                name="cedulaIdentidad"
                
                type="text"
                placeholder="Nombre/RazonSocial"
                
                // {...register('nombre_usuario')}
                className={`form-control `}

                
              />
              <label htmlFor="floatingInput">Cedula Identidad</label>
              <div className="invalid-feedback"></div>
            </div>
            
            <div className="form-floating my-3">
              <input onChange={handleInput}
                name="DomicilioEmpresa"
                
                type="text"
                placeholder="Nombre/RazonSocial"
                
                // {...register('nombre_usuario')}
                className={`form-control `}

                
              />
              <label htmlFor="floatingInput">Direccion Empresa</label>
              <div className="invalid-feedback"></div>
            </div>

            <div className="form-floating my-3">
              <input onChange={handleInput}
                name="telefono"
                
                type="text"
                placeholder="Nombre/RazonSocial"
                
                // {...register('nombre_usuario')}
                className={`form-control `}

                
              />
              <label htmlFor="floatingInput">Telefono/Celular</label>
              <div className="invalid-feedback"></div>
            </div>
            
            <div className="form-floating my-3">
              <input onChange={handleInput}
                name="usuario"
                
                type="text"
                placeholder="Nombre de Usuario"
                
                // {...register('nombre_usuario')}
                className={`form-control `}

                
              />
              <label htmlFor="floatingInput">Nombre de Usuario</label>
              <div className="invalid-feedback"></div>
            </div>
            <div className="form-floating my-3">
              <input
              onChange={handleInput}
                type="email"
                name='email'
                
                placeholder="name@example.com"

                // {...register('email')}
                className={`form-control `}

              
              />
              <label htmlFor="floatingInput">Email</label>
              <div className="invalid-feedback"></div>
            </div>

            <div className="form-floating my-3">
              <input
              onChange={handleInput}
                type="password"
                name='password'
              
                placeholder="Password"

                // {...register('password')}
                className={`form-control `}

               
              />
              <label htmlFor="floatingPassword">Contraseña</label>
              <div className="invalid-feedback"></div>
            </div>

            <div className="form-floating my-3">
              <input
              onChange={handleInput}
                type="password"
                id="passwordConfirm"
                placeholder="Confirmar Password"

                // {...register('confirmPassword')}
                className={`form-control `}
              />
              <label htmlFor="floatingPassword">Confirmar Contraseña</label>
              <div className="invalid-feedback"></div>
            </div>

            <div className="form-group text-center form-check">
            <input

                name="acceptTerms"
                type="checkbox"
                // {...register('acceptTerms')}
                className={`form-check-input `}
            />
            <label htmlFor="acceptTerms" className="form-check-label">
                He leído y aceptado los terminos
            </label>
            <div className="invalid-feedback"></div>
            </div>

            <div className="d-grid gap-2 d-md-bloc mx-auto"> 
                <button onClick={handleSubmit} className="btn btn-primary btn-sm" type="submit">
                Registrar
                </button>

                <button type="button"  className="btn btn-danger btn-sm">
                Cancelar
                </button>
            </div>
            <p className="mt-5 mb-3 text-center">¿Ya tienes una cuenta? <Link to="/proveedor">Inicia Sesión</Link></p>
            <p className="mt-5 mb-3 text-center">© 2021 - Tecnicatura en Desarrollo de Software</p>
          </form>
      </main>
    
    
    </>
  )
}

export default Registro