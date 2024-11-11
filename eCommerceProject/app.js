const products=[
    {
        id:1 ,
        name: 'Canon Camera', 
        price: "$350", 
        image: "img/camera.jpg", 
        description: 'Canon Systemkamera EOS R50, 24,2 MP, Bluetooth-WLAN'
    },
    {
        id:2 ,
        name: 'Samsung CCTV Camera', 
        price: "$120", 
        image: "img/cctv-camera.jpg" , 
        description:'Smart Camera Home WIFI Security Surveillance Camera'},

    {
        id:3 ,
        name: 'Regency Fan', 
        price:"$11.99", 
        image: "img/fan.jpg", 
        description: 'Effective fan'
    },
    {
        id:4 ,
        name: 'Marshal Headphone', 
        price: "$25", 
        image: "img/headphones.jpg" , 
        description: 'Head phone'
    },

    {
        id:5 ,
        name: 'Thermometer', 
        price: "$35", 
        image: "img/thermometer.png", 
        description: 'Very sensitive thermometer'
    },
    {
        id:6 ,
        name: 'Wallkman', 
        price: "$30", 
        image: "img/wallkman.jpg", 
        description: 'Nice wallkman'}
    ];


//display product
function displayProducts(products){
    const productContainer= document.getElementById('product-container');

    //Looping through the products
    products.forEach(product=> {

        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML=`
        <img src=${product.image} alt=${product.name}/>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>${product.price}</p>
        `
        productContainer.appendChild(productCard)
    })
    /*products.forEach(product=> {
    productCard=document.createElement('div');
    productCard.classList.add('product-card');

    const productImg=document.createElement('img');
    productImg.src= product.image ;
    productImg.alt=product.name ;
    productCard.appendChild(productImg);

    const productName=document.createElement('h3');
    productName.textContent= product.name;
    productCard.appendChild(productName);

    const productDescr=document.createElement('p');
    productDescr.textContent= product.description;
    productCard.appendChild(productDescr);

    const productPrice=document.createElement('p');
    productPrice.textContent= 20;
    productCard.appendChild(productPrice);

    productContainer.appendChild(productCard);
}
);*/

}

displayProducts(products);

//Sorting

document.addEventListener("DOMContentLoaded", () => {
    const sortDropdown = document.getElementById("sort");
    const productList = document.querySelector(".product-container");
    const products = Array.from(productList.children);
  
    sortDropdown.addEventListener("change", () => {
      const sortOrder = sortDropdown.value;
      const sortedProducts = products.sort((a, b) => {
        const priceA = parseFloat(
          a.querySelector(".price").textContent.replace("$", "")
        );
        const priceB = parseFloat(
          b.querySelector(".price").textContent.replace("$", "")
        );
  
        if (sortOrder === "asc") {
          return priceA - priceB;
        } else {
          return priceB - priceA;
        }
      });
  
      // Clear the product list
      while (productList.firstChild) {
        productList.removeChild(productList.firstChild);
      }
  
      // Append the sorted products
      sortedProducts.forEach((product) => {
        productList.appendChild(product);
      });
    });
  });

  //adding product to cart

  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modalCart");
    const cartLink = document.getElementById("cartLink");
    const closeBtn = document.getElementsByClassName("modal-cart-close")[0];
    const cartItems = [];
    const cartDisplay = document.querySelector(".modal-cart-content p");
  
    cartLink.onclick = function () {
      modal.style.display = "block";
      setTimeout(() => {
        modal.classList.add("show");
      }, 10);
      updateCartDisplay();
    };
  
    closeBtn.onclick = function () {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    };
  
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.classList.remove("show");
        setTimeout(() => {
          modal.style.display = "none";
        }, 300);
      }
    };
  
    const addToCartButtons = document.querySelectorAll(".product--buy");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const product = event.target.closest(".product-container");
        const productName = product.querySelector(product.name).textContent;
        const productPrice = product.querySelector(".product--price").textContent;
  
        cartItems.push({
          name: productName,
          price: productPrice,
        });
  
        displayConfirmation(productName);
        updateCartDisplay();
      });
    });
  
    function updateCartDisplay() {
      if (cartItems.length === 0) {
        cartDisplay.textContent = "Your cart is empty.";
      } else {
        cartDisplay.innerHTML =
          "<ul>" +
          cartItems
            .map((item) => `<li>${item.name} - ${item.price}</li>`)
            .join("") +
          "</ul>";
      }
    }
  
    function displayConfirmation(productName) {
      const confirmation = document.createElement("div");
      confirmation.className = "confirmation-message";
      confirmation.textContent = `${productName} has been added to the cart.`;
      document.body.appendChild(confirmation);
  
      setTimeout(() => {
        confirmation.remove();
      }, 3000);
    }
  });