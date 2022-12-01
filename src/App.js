import {useState} from 'react'
import {Routes ,Route} from 'react-router-dom'
import Lading from './pages/ladingPage/Lading'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Session } from './context/Session';
import LoginCliente from './pages/clientes/LoginCliente'
import HomeClientes from './pages/clientes/HomeClientes';
import Publicaciones from './components/clientes/Publicaciones'
import Bebidas from './components/clientes/navCategoria/Bebidas'
import Lacteos from './components/clientes/navCategoria/Lacteos'
import Panificado from './components/clientes/navCategoria/Panificados'
import Comestibles from './components/clientes/navCategoria/Comestibles'
import Carnicos from './components/clientes/navCategoria/Carnicos'
import Pastas from './components/clientes/navCategoria/Pastas'
import './App.css'
function App() {
  const [session, setSession] = useState({isLogged: false});

  return (
   <>
   <Session.Provider value={[session,setSession]}>
   <Routes>
    <Route path='/' element={<Lading/>} />
    <Route path='/cliente' element={<LoginCliente/>} />
    <Route path='/homeCliente' element={<HomeClientes/>} />
    <Route path='/publicaciones' element={<Publicaciones/>}/>
    <Route path='/bebidas' element={<Bebidas/>} />
    <Route path='/lacteos' element={<Lacteos/>} />
    <Route path='/panificado' element={<Panificado/>} />
    <Route path='/comestible' element={<Comestibles/>} />
    <Route path='/pastas' element={<Pastas/>} />
    <Route path='/carnicos' element={<Carnicos/>} />
    <Route path='/' element />
    <Route path='/' element />
    <Route path='/' element />


    </Routes>


   </Session.Provider>
   
   
   </>
  );
}

export default App;
