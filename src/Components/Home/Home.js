import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Products/Loading';
import Products from '../Products/Products';
import MessageBox from './MessageBox';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(()=>{
        const fetchData = async() => {
        try {
            setLoading(true)
                const {data} = await axios.get('/api/products')
                setLoading(false)
                setProducts(data)
            }
        catch (err) {
            setError(err.message)
            setLoading(false)
        }
    }
    fetchData();
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