import React from 'react';
import Rating from '../Rating/Rating';

const Products = ({product}) => {
    return (
        <div>
            <div className="card" key={product._id} >
         <a href={`product/${product._id}`}>
           <img src={product.image} alt={product.name} className="medium"/>
         </a>
         <div className="card-body">
           <a href={`product/${product._id}`}>
           <h2>{product.name}</h2>
           </a>
           <Rating rating = {product.rating} reviews={product.numReviews}></Rating>
           <div className="price">
             $ {product.price}
           </div>
           </div>
       </div>
        </div>
    );
};

export default Products;