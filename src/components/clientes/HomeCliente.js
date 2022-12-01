import React from 'react'
import NabvarCliente from '../clientes/nav/NavbarClient'
import Grid from './Grid'
import Footer from '../Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import NavBar2 from '../clientes/nav/NavProduct';
const HomeCliente = () => {
  return (
   <>
       <Stack gap={3}>
      <div className="bg-light border">{<NabvarCliente/>}</div>
  
    </Stack>
    <NavBar2/>
   
   <Grid/>



   {/* <Footer/> */}
   </>
  )
}

export default HomeCliente