import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../Actions/Actions';
import MessageBox from '../Home/MessageBox';
import Loading from '../Products/Loading';
import Rating from '../Rating/Rating';

const Details = (props) => {
    const dispatch = useDispatch()
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails; 
    useEffect(() => {
        dispatch(detailsProduct(productId))
    }, [dispatch, productId])
    return (
        <div >
            {
                loading ? (<Loading />) : error ? (<MessageBox variant="danger">{error}</MessageBox>) : (
                    <div className="row top">
                        <Link to="/">Back to Home</Link>
                        <div className="col-2">
                            <img src={`/${product.image}`} alt={product.name} />
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
                                                {product.countInStock > 0 ? (<span className="success">In Stock</span>) : (<span className="error">Out of stock</span>)}
                                            </div>
                                        </div>
                                    </li>
                                    <li><button className="primary block">Add to Cart</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
   

    );
};

export default Details;