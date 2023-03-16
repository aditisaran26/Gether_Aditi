import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className='card'>
      {props.id}
      <img src= {props.imageurl} alt=''/>
      <div className='card__info'>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p className='card__price'>{props.price}</p>
        

      </div>
      <button>Add to cart</button>
    </div>
  )
}

export default Card
