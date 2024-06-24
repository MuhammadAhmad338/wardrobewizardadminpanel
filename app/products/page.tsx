"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../Store/store';
import { fetchProducts } from '../Slice/productsSlice';

const Products = () => {
  
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.product.products);
  const status = useSelector((state: RootState) => state.product.status);
  const error = useSelector((state: RootState) => state.product.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }
  
    return (
      <div className="container mx-auto p-4">

        <h1 className='font-bold text-lg mb-4'>Products listed at the wardrobe website: </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">   
        {products.map((product) => (
          <div key={product._id} className="bg-white p-4 shadow-md">
            <h2 className="text-lg font-bold mb-1">{product.name}</h2>
            <p className="text-sm text-gray-700 mb-1">{product.description}</p>
            <p className="text-sm text-gray-900 font-semibold mb-1">${product.price}</p>
            <p className="text-sm text-gray-700 mb-1">Material: {product.productInfo.material}</p>
            <p className="text-sm text-gray-700 mb-1">Features: {product.productInfo.features}</p>
            <p className="text-sm text-gray-700 mb-1">Fit: {product.productInfo.fitDescription}</p>
            <p className="text-sm text-gray-700 mb-1">Details: {product.productInfo.additionalDetails}</p>
            <p className="text-sm text-gray-700 mb-1">Sizes: {product.sizes.join(', ')}</p>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <img key={index} src={image} alt={product.name} className="w-16 h-16 object-cover rounded" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products