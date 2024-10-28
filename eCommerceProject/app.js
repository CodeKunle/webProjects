const products=[
    {id:1 ,name: 'Canon Camera', price: 350, image: "img/camera.jpg", description: 'Canon Systemkamera EOS R50, 24,2 MP, Bluetooth-WLAN'},
    {id:2 ,name: 'Samsung CCTV Camera', price: 120, image: "img/cctv-camera.jpg" , description:'Smart Camera Home WIFI Security Surveillance Camera'},
    {id:3 ,name: 'Regency Fan', price:11.99, image: "img/fan.jpg", description: 'Effective fan'},
    {id:4 ,name: 'Marshal Headphone', price: 25, image: "img/headphones.jpg" , description: 'Head phone'},
    {id:5 ,name: 'Thermometer', price: 35, image: "img/thermometer.png", description: 'Very sensitive thermometer'},
    {id:6 ,name: 'Wallkman', price: 30, image: "img/wallkman.jpg", description: 'Nice wallkman'}
    ];


//display product
function displayProducts(products){
    const productContainer= document.getElementById('product-container');

    //Looping through the products

    products.forEach(product=> {
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
);

}

displayProducts(products);