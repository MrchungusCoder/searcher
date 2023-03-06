


let result = request("https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.xml")
let result2 = request2("https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.json")





//PRODUCTS LOAD

let loadProducts = () => {
  request(result)
  request(result2)
}


  //XML
function request(myUrl) {

  
  let contenedor2 = document.querySelector(".imgs_container");
  let salida2 = ""

    fetch(myUrl)
      .then(response => response.text() ) 
      .then(result => {

          let xml = (new DOMParser()).parseFromString(result, 'application/xml');
          
          let productArr = xml.getElementsByTagName("product")
          

          for (let i = 0; i<productArr.length; i++){

            let imgArr = productArr[i].getElementsByTagName("src")[0].textContent;
            let typeArr = productArr[i].getElementsByTagName("type")[0].textContent;
            let nameArr = productArr[i].getElementsByTagName("name")[0].textContent;
            let priceArr = productArr[i].getElementsByTagName("price")[0].textContent;

            salida2+=`
            <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4 card_container">
              <div class="card card-blog card-plain">
                <div class="card-header p-0 mt-n4 mx-3">
                  <a class="d-block shadow-xl border-radius-xl img_product">
                    <img src="${imgArr}" alt="${nameArr}" class="img-fluid shadow border-radius-xl">
                  </a>
                </div>
                <div class="card-body p-3">
                  <p class="mb-0 text-sm text_type">${typeArr}</p>
                  <a href="javascript:;">
                    <h5>
                    ${nameArr}
                    </h5>
                  </a>
                  <p class="mb-4 text-sm">
                    <b>Price: </b> $ ${priceArr}
                  </p>
                </div>
              </div>
            </div>
            `;
          }
          contenedor2.innerHTML += salida2;

        })

      .catch(error => {
        console.log( error );
      });
  }

  //JSON
function request2 (myUrl2) {
  let contenedor = document.querySelector(".imgs_container");
  let salida = ``;
    fetch(myUrl2)
    .then(response => response.json() ) 
    .then(result => {

      result.forEach(item => {
        salida+=`
        <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4 card_container">
          <div class="card card-blog card-plain">
            <div class="card-header p-0 mt-n4 mx-3">
              <a class="d-block shadow-xl border-radius-xl img_product">
                <img src="${item.src}" alt="${item.name}" class="img-fluid shadow border-radius-xl">
              </a>
            </div>
            <div class="card-body p-3">
              <p class="mb-0 text-sm text_type">${item.type}</p>
              <a href="javascript:;">
                <h5>
                ${item.name}
                </h5>
              </a>
              <p class="mb-4 text-sm">
                <b>Price: </b> $ ${item.price}
              </p>
            </div>
          </div>
        </div>
        `;
      });
  
      contenedor.innerHTML += salida;
  
    })
  
    .catch(error => {
      console.log( error );
    });
  
}




loadProducts();


//----------------PRODUCTS FILTER SEARCH BTN

let filterProducts = () => {

  let button = document.getElementById("filter");
  let contenedor = document.querySelector(".imgs_container");
  let salidaError = `
  <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4" id="alert">
    <div class="alert alert-primary text-secondary-emphasis" role="alert">
      Lo sentimos, el producto que buscas no se encuentra disponible.
    </div>
  </div>`;

  let style = document.createElement('style');
  style.innerHTML = `
  [role="alert"] {
    padding: 16px 24px;
    display: none;
    position: fixed;
    bottom: 24px;
    right: 24px;
    border: 2px solid rgb(0, 126, 167);
    border-radius: 4px;
  }`;

  document.head.appendChild(style);
  
  // -------BUTTON PRESS--------
  button.addEventListener("click", () => {
    let search_value = document.getElementById("text").value;

    let card = document.querySelectorAll(".card_container")
    let card_text = document.querySelectorAll("p.text_type");
    let card_img = document.querySelectorAll("img.img-fluid");

    card_text.forEach((item,index) =>{
      if (item.innerText.includes(search_value.toLowerCase())){
        card[index].classList.remove("d-none");
      }
      else{
        card[index].classList.add("d-none");
        window.addEventListener('load', function () {
        button.addEventListener('click', () => {
            style.innerHTML = `
            #alert {
              padding: 16px 24px;
              display: block !important;
              position: fixed;
              bottom: 24px;
              right: 24px;
              border: 2px solid rgb(0, 126, 167);
              border-radius: 4px;
            }`;;
          });
        });
      }


    })

  })


  
  // -------ENTER PRESS--------
  let search_input = document.getElementById("text");
  search_input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("filter").click();
      function enterKey() {
        let search_value = document.getElementById("text").value;
    
        let card = document.querySelectorAll(".card_container")
        let card_text = document.querySelectorAll("p.text_type");
        let card_img = document.querySelectorAll("img.img-fluid");
        
        let salidaError = "";
      
        
        card_text.forEach((item,index) =>{

          if (item.innerText.includes(search_value.toLowerCase())){
            card[index].classList.remove("d-none");
          }
          else{
            card[index].classList.add("d-none");
            window.addEventListener('load', function () {
            button.addEventListener('click', () => {
                style.innerHTML = `
                #alert {
                  padding: 16px 24px;
                  display: block !important;
                  position: fixed;
                  bottom: 24px;
                  right: 24px;
                  border: 2px solid rgb(0, 126, 167);
                  border-radius: 4px;
                }`;;
              });
            });
          }
        })
      }
      enterKey()
    
    }
  });

}
filterProducts()


