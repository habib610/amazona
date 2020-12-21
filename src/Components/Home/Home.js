import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../Actions/Actions';
import Loading from '../Products/Loading';
import Products from '../Products/Products';
import MessageBox from './MessageBox';

const Home = () => {
   const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList);
    const {loading, error, products} = productList;
    useEffect(()=>{
       dispatch(listProducts())
    },[])

    return (
        <div className="row center">
            {
                loading ? (<Loading/>) : error ? (<MessageBox variant="danger">{error}</MessageBox>) : (
                        products.map(product => <Products key={product._id} product={product} ></Products>)
                )
            }
           
        </div>
    );
};

export default Home;