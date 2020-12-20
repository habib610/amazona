import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchData = async() => {
            const {data} = await axios.get('/api/products')
            setProducts(data)
        }
        fetchData();
    },[])

    return (
        <div className="row center">
            {
                products.map(product => <Products key={product._id} product={product} ></Products>)
            }
        </div>
    );
};

export default Home;