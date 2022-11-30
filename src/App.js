import {useState} from 'react'
import {Routes ,Route} from 'react-router-dom'
import Lading from './pages/ladingPage/Lading'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Session } from './context/Session';
import LoginCliente from './pages/clientes/LoginCliente'
import HomeClientes from './pages/clientes/HomeClientes';
import Publicaciones from './components/clientes/Publicaciones'
import './App.css'
function App() {
  const [session, setSession] = useState(Session);

  return (
   <>
   <Session.Provider value={[session,setSession]}>
   <Routes>
    <Route path='/' element={<Lading/>} />
    <Route path='/cliente' element={<LoginCliente/>} />
    <Route path='/homeCliente' element={<HomeClientes/>} />
    <Route path='/publicaciones' element={<Publicaciones/>}/>
    <Route path='/' element />
    <Route path='/' element />
    <Route path='/' element />
    <Route path='/' element />
    <Route path='/' element />
    <Route path='/' element />
    <Route path='/' element />
    <Route path='/' element />
    <Route path='/' element />


    </Routes>


   </Session.Provider>
   
   
   </>
  );
}

export default App;
