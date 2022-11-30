import React from 'react'
import NabvarCliente from '../clientes/nav/NavbarClient'
import Grid from './Grid'
import Footer from '../Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
const HomeCliente = () => {
  return (
   <>
       <Stack gap={3}>
      <div className="bg-light border">{<NabvarCliente/>}</div>
  
    </Stack>
   
   <Grid/>



   {/* <Footer/> */}
   </>
  )
}

export default HomeCliente