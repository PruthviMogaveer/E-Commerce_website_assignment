import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="cursor-pointer w-56 rounded-lg p-2 shadow-lg bg-white mx-6 mb-16 overflow-hidden hover:bg-slate-50 hover:scale-105 transition-all duration-100">
      <img className="w-full h-48 object-contain rounded-lg" src={product.image} alt={product.name} />
      <div className="px-2 py-4 w-full">
        <div className="font-semibold text-xl mb-1 text-gray-950 w-full truncate">{product.name}</div>
        <p className="text-gray-600 text-base font-light w-full overflow-hidden overflow-ellipsis h-12">
          {product.description}
        </p>
      </div>
      <div className="px-1 pt-1 pb-1">
        <span className=" inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${product.price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
