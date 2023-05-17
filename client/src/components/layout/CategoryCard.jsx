import React from 'react';

import '../../css/CategoryCard.css';

const CategoryCard = ({ SVGIcon, description, fill }) => {
  return (
    <div className='category-card'>
      <div className='category-card-svg'>
        <SVGIcon height='50px' width='50px' />
      </div>
      <div className='category-card-description'>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
