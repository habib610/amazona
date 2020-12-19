import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const Products = ({product}) => {
    return (
        <div>
            <div className="card" key={product._id} >
         <Link to={`/product/${product._id}`}>
           <img src={product.image} alt={product.name} className="medium"/>
         </Link>
         <div className="card-body">
           <Link to={`/product/${product._id}`}>
           <h2>{product.name}</h2>
           </Link>
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