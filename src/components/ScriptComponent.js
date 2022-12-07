export const redirectToMercadoPago = (preferenceId) => {
    const loadScript = (url = 'https://sdk.mercadopago.com/js/v2', callback: () => void) => {
      let script = document.createElement('script');
      script.type = 'text/javascript';
  
      if (script.readyState) {
        script.onreadystatechange = () => {
          if (
            script.readyState === 'loaded' ||
            script.readyState === 'complete'
          ) {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {
        script.onload = () => callback();
      }
      script.src = url;
      document.getElementsByTagName('head')[0].appendChild(script);
    };
  
    const handleScriptLoad = () => {
      const mp = new window.MercadoPago(process.env.REACT_APP_MERCADOPAGO_KEY || 'TEST-419dfb72-6aca-4c89-84e5-dfd40dc92784', {
        locale: 'es-AR'
      });
      mp.checkout({
        preference: {
          id: preferenceId
        },
        autoOpen: true
      });
    };
  
    loadScript('https://sdk.mercadopago.com/js/v2', handleScriptLoad);
  };