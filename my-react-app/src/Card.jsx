import React from 'react';
import image from './assets/lady.jpg';

function Card() {
  return (
    <div class= "campagn">
        <img class = "banner" src={image} alt="picture of a lady" />
        <h2>Climate Campagn</h2>
        <p>We must save the earth today!</p>
      
    </div>
  )
}

export default Card
