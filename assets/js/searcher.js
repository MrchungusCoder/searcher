









let loadProducts = () => {

  

    fetch("https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.json")
      .then(response => response.json() ) /* Convierte el response a texto */
      .then(result => {
        
        let element = document.querySelector("img.radius");




      })
      .catch(error => {
        console.log( error );
      });

    fetch("https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.xml")
      .then(response => response.text() ) /* Convierte el response a texto */
      .then(result => {

        let xml = (new DOMParser()).parseFromString(result, 'application/xml');
        console.log( xml );

        let productsArr = xml.getElementsByTagName("name")

        console.log(productsArr)
      
      })

      .catch(error => {
          console.log( error );
      });

}

loadProducts();












