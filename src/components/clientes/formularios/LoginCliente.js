import React, { useContext } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Session } from "../../../context/Session";
import img from "../../../img/como-ser-comerciante.jpg";
import swal from "sweetalert";

const Login = () => {
  const [state, setState,] = useContext(Session);

  const navigate = useNavigate();

  const InicioSesionExitosa = (token) => {
    swal({
      title: "Inicio de Sesión Exitosa",
      text: "Bienvenido",
      icon: "success",
      timer: "1000",
      showCancelButton: false,
      showConfirmButton: false,
    }).then(() => {
      //Almacenamiento del token y redirección después de 3 segundos
    });
  };

  const opciones = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };

  //Método para la redirección

  // const [estado,setEstado]= useState({
  //   usuario:"",
  //   password:""
  // });

  const { usuario, password } = state;
  const handleInput = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
    // console.log(target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      // Se modifican las opciones del fetch, añadiendo los datos del formulario
      opciones.body = JSON.stringify({ usuario, password });
      console.log({ usuario });

      const resp = await fetch("http://localhost:3000/log", opciones);

      // Si el ok es false, significa que se produjo un error en la petición
      if (!resp.ok) alert("Revise las credenciales y vuelva a intentarlo");

      const data = await resp.json();

      const info = {
        token: data.token,
        user: usuario,
      };

      console.log(data.token);
      console.log(data.usuario);
      if (data.token) {
        localStorage.setItem("rstoken", data.token);
        console.log(localStorage);
        InicioSesionExitosa(data.token);
        navigate("/homeCliente");
      }
      setState({ info });
    })();
  };

  return (
    <>
      <main className="form-signin w-100 m-auto">
        <form>
          <img className="mb-4" src={img} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="text"
              name="usuario"
              className=" form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={handleInput}
            />
            <label for="floatingInput">Usuario</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              onChange={handleInput}
              name="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            NavLink=""
            className="w-100 btn btn-lg btn-primary"
            onClick={handleSubmit}
            type="submit"
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
    </>
  );
};

export default Login;
