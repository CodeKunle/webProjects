const products=[
    {id:1 ,name: '3-Piece Men Jeans', price: 15, image:"img/3-in-1-jeans.jpg" , description: '3-Piece Men Jeans with different shades of blue'},
    {id:2 ,name: 'Ladies Black Inner Wear', price: 6, image: "img/ladieBlackInnerWear.jpg" , description:'This Ladies Black Inner Wear'},
    {id:3 ,name: 'Ladies T-Shirt', price: 11.99, image: "img/ladies-Tshirt.jpg", description: 'Ladies T-Shirt'},
    {id:4 ,name: 'ladies Coat', price: 25, image: "img/ladiesCoat.jpg" , description: 'Ladies Coat'},
    {id:5 ,name: 'Men Office Shirt', price: 15, image: "img/men-officeShirt.jpg", description: 'These are fashionable men office shirts'},
    {id:6 ,name: 'Men Office Shirt', price: 10, image: "img/menOfficeShirt.jpg", description: 'Stylish office wear made purely of recyclable materials'},
    {id:7 ,name: 'Ladies Winter Wear', price: 8, image: "img/ladiesWinterWear.jpg", description: 'Styled winter wear made purely of recyclable materials'},
    {id:8 ,name: 'Men Socks', price: 4, image: "img/menSocks.jpg", description: 'Men socks made purly of 100% polyester'}
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