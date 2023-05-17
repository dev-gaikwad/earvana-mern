import React, { useContext, useEffect, useState } from 'react';
import '../../css/ProductsSection.css';
import { UserContext } from '../../context/UserContext';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';

const ProductsSection = () => {
  const [productsToBeDisplayed, setProductsToBeDisplayed] = useState([]);

  const { allProducts } = useContext(UserContext);

  const { query } = useParams();

  return (
    <div className='products-section-container'>
      {productsToBeDisplayed ? (
        productsToBeDisplayed.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductsSection;
