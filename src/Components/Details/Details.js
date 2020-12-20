import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../data';
import Rating from '../Rating/Rating';

const Details = (props) => {

    const product = data.products.find(pd=> pd._id === props.match.params.id)
console.log(product)
    return (
        <div className="row top">
        <Link to="/">Back to Home</Link>
            <div className="col-2">
                <img src={`/${product.image}`} alt={product.name}/>
            </div>
            <div className="col-1">
                <ul>
                    <li>{product.name}</li>
                    <li>
                        <Rating rating={product.rating} reviews={product.rating} ></Rating>
                    </li>
                    <li>Price ${product.price}</li>
                    <li>
                        {product.description}
                    </li>
                </ul>
            </div>
            <div className="col-1">
            <div className="card card-body">
                <ul>
                    <li>
                    <div className="row">
                        <div>Price</div>
                        <div className="price">${product.price}</div>
                    </div>
                    </li>
                    <li>
                        <div className="row">
                    <div>Status </div>
                    <div>
                        {product.countInStock > 0 ? (<span className="success">In Stock</span>) : (<span className="error">Out of stock</span>) }
                    </div>
                        </div>
                    </li>
                    <li><button className="primary block">Add to Cart</button></li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Details;