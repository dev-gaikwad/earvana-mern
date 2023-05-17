import React from 'react';
import OptionsTab from '../components/layout/OptionsTab';
import ProductsSection from '../components/layout/ProductsSection';
import '../css/ProductsListingPage.css';

const ProductListingPage = () => {
  return (
    <div className='productlisting-page-container'>
      <OptionsTab />
      <ProductsSection />
    </div>
  );
};

export default ProductListingPage;
