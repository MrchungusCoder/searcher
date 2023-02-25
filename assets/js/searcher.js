


let productsjsonURL = `https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.json`
let productsxmlURL = `https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.xml`


let loadProducts = (myJSON, myXML) => {

  fetch( myJSON,myXML )
    .then((response) =>{
        response.json()
        
    } )
    .then(result => {

      /* Callback por éxito: Procese el result */
      console.log( result );
    })
    .catch(error => {
      
      /* Callback por fallo: Procese el error */

      console.log( error );

    });
  
}

loadProducts(productsjsonURL, productsxmlURL);

















