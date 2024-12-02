import React from 'react'

function List() {
    const fruits = ["mango", "cashew", "pear", "carrot"];
    const addfruits = fruits.map(fruit => <li>I love {fruit}</li>);
    return (<ul>{addfruits}</ul>)
    
  
}

export default List
