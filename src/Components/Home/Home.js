import React from 'react';
import data from '../../data';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div className="row center">
            {
                data.products.map(product => <Products key={product.id} product={product} ></Products>)
            }
        </div>
    );
};

export default Home;