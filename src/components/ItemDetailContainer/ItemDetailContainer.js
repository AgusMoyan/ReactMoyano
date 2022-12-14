import React from 'react';
import './item-detail-container.css';
const  image = "../img/";

const ItemDetailContainer = ({product}) => {
  return (
    <div className='contenedorDetail'>                  
      <img src= {`${image}${product.id}.webp`} alt={product.name}></img>
      <div className='detail'>
        <div className='name'>{product.name}</div>
        <div className={`price`}> Precio $ {product.price} </div> 
        <div className='cantidad'>{`Disponibilidad: ${product.stock}`}</div>
        <p>{`Categoria: ${product.categoryName}`}</p>


      </div>

    </div>
  )
  }; 

export default ItemDetailContainer;