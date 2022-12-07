import React from 'react'
import { ScriptComponent } from './ScriptComponent'
const idForm = 'formMp'

const MercadoPagoPage = () => {


    // const mp = new MercadoPago('TEST-419dfb72-6aca-4c89-84e5-dfd40dc92784', {
    //     locale: 'es-AR'
    //   });
    
    //   mp.checkout({
    //     preference: {
    //       id: 'YOUR_PREFERENCE_ID'
    //     },
    //     render: {
    //       container: '.cho-container',
    //       label: 'Pagar',
    //     }
    //   });

    // const script = document.createElement('script');
    // script.type = 'text/javascript';
    // script.src = 'https://sdk.mercadopago.com/js/v2';
    // const form = document.getElementById(idForm);
    // form.appendChild(script);

  return (
    <>
    
    <form className="cho-container" id={idForm}></form>
    </>
  )
}

export default MercadoPagoPage