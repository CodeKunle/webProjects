const products=[
    {   id:1 ,
        name: '3-Piece Men Jeans', 
        price:"$15", 
        image:"img/3-in-1-jeans.jpg" , 
        description: '3-Piece Men Jeans with different shades of blue'},

    {   id:2 ,
        name: 'Ladies Black Inner Wear', 
        price: "$6", 
        image: "img/ladieBlackInnerWear.jpg" , 
        description:'This Ladies Black Inner Wear'},

    {   id:3 ,
        name: 'Ladies T-Shirt', 
        price: "$11.99", 
        image: "img/ladies-Tshirt.jpg", 
        description: 'Ladies T-Shirt'},

    {   id:4 ,
        name: 'ladies Coat', 
        price: "$25", 
        image: "img/ladiesCoat.jpg" , 
        description: 'Ladies Coat'},
    {   id:5 ,
        name: 'Men Office Shirt', 
        price: "$15", 
        image: "img/men-officeShirt.jpg", 
        description: 'These are fashionable men office shirts'},

    {   id:6 ,
        name: 'Men Office Shirt', 
        price: "$10", 
        image: "img/menOfficeShirt.jpg", 
        description: 'Stylish office wear made purely of recyclable materials'},
    {   id:7 ,
        name: 'Ladies Winter Wear', 
        price: "$8", 
        image: "img/ladiesWinterWear.jpg", 
        description: 'Styled winter wear made purely of recyclable materials'},
    {   id:8 ,
        name: 'Men Socks', 
        price: "$4", 
        image: "img/menSocks.jpg", 
        description: 'Men socks made purly of 100% polyester'}
    ];


//display product
function displayProducts(products){
    const productContainer= document.getElementById('product-container');

    //Looping through the products

    products.forEach(product=> {
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML=`
        <img src=${product.image} alt=${product.name}>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>${product.price}</p>
    `

    /*const productImg=document.createElement('img');
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
    productCard.appendChild(productPrice);*/

    productContainer.appendChild(productCard);
}
);

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


//Adding product to cart

document.addEventListener("DOMContentLoaded", () => {
  // Cart array to hold products
  const cart = [];

  // Get elements
  const cartModal = document.getElementById("cartModal");
  const cartButton = document.getElementById("cartButton");
  const closeBtn = document.querySelector(".close-btn");
  const cartItemsDiv = document.getElementById("cartItems");

  // Function to display cart items
  function displayCartItems() {
    if (cart.length === 0) {
      cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      cartItemsDiv.innerHTML = "<ul>" + cart.map(product => `<li>${product.name} - ${product.price}</li>`).join('') + "</ul>";
    }
  }

  // Event listener for "View Cart" button
  cartButton.addEventListener("click", () => {
    displayCartItems();
    cartModal.style.display = "block";
  });

  // Close modal when close button is clicked
  closeBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  // Close modal when clicking outside of modal content
  window.onclick = (event) => {
    if (event.target == cartModal) {
      cartModal.style.display = "none";
    }
  };

  // Add to Cart functionality
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (event) => {
      const productDiv = event.target.closest(".shop-item");
      const productName = productDiv.getAttribute("data-name");
      const productPrice = parseFloat(productDiv.getAttribute("data-price")).toFixed(2);

      // Add the product to the cart
      cart.push({ name: productName, price: productPrice });

      // Show confirmation message
      showConfirmation(productName);

      // Update cart items in modal
      displayCartItems();
    });
  });

  // Function to show confirmation message
  function showConfirmation(productName) {
    const confirmation = document.createElement("div");
    confirmation.className = "item-added";
    confirmation.textContent = `${productName} added to cart.`;
    document.body.appendChild(confirmation);

    setTimeout(() => {
      confirmation.remove();
    }, 2000); // Remove after 2 seconds
  }
});


