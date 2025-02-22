import React from 'react'
import categories from '../data/products'
import ProductList from './ProductList'


const Category = () => {
    return (
        <div>
            {categories.map((category, index) => (
                <>
                    <h2 className="text-2xl max-md:ml-5 max-md:mb-2 font-bold mb-4 ml-8">{category.name}</h2>
                    <ProductList key={index} category={category} />
                </>
            ))}
        </div>
    )
}

export default Category