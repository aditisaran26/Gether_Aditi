import React from 'react';
import Card from './Card';
import './Imagecarousel.css';
import { productData } from './data';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



function Imagecarousel() {

    const product = productData.map(item =>(
        <Card name={item.name} imageurl={item.imageurl}  description={item.description} />
      ));
    
  
    const getBox =() =>{
        return document.querySelector('.product__card');
    }
    const prev =() =>
    {
        const box =getBox();
        const width = box.clientWidth;
        box.scrollLeft=  box.scrollLeft - width;
    }
    const next =() =>
    {
        const box =getBox();
        const width = box.clientWidth;
        box.scrollLeft=  box.scrollLeft +width ;
    }


  
  return (
    <div className='product'>
      <h2>WELCOME TO MY PAGE</h2>
      <h1>RELAX . REFRESH . RECONNECT</h1>
      
        
      <div className='product__card' >
         {product}
            
            
        </div>
      

        <button className='product__leftbutton' onClick={prev} >
            <p>
                &lt;
            </p>
        </button>

        <button className='product__rightbutton' onClick={next}>
            <p>
                &gt;
            </p>
        </button>

        
    </div>
  );
}

export default Imagecarousel;
