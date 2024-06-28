import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ category }) => {

    return (
        <div className="my-8">
            <div className="flex flex-wrap justify-normal w-full px-10 max-md:px-5 ">
                {category.products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
