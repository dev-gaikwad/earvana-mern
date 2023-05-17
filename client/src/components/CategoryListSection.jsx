import React from 'react';
import CategoryCard from './layout/CategoryCard';
import '../css/CategoryListSection.css';
import {
  WiredEarphonesIcon,
  WiredHeadphonesIcon,
  WirelessEarphonesIcon,
  WirelessHeadphonesIcon,
  AmplifierIcon,
  CablesIcon,
  ArrowRightBtn,
} from '../utils/svg/SVGIcons';

const CategoryListSection = () => {
  return (
    <>
      <section>
        <h2 className='section-heading'>
          Choose from our extensive list of categories
        </h2>
        <div className='category-list-section'>
          <CategoryCard
            SVGIcon={WiredEarphonesIcon}
            description='In-Ear Wired Earphones'
          />
          <CategoryCard
            SVGIcon={WiredHeadphonesIcon}
            description='Over-the-Ear Wired Headphones'
          />
          <CategoryCard
            SVGIcon={WirelessEarphonesIcon}
            description='In-Ear Wireless Earphones'
          />
          <CategoryCard
            SVGIcon={WirelessHeadphonesIcon}
            description='Over-the-Ear Wireless Headphones'
          />
          <CategoryCard
            SVGIcon={AmplifierIcon}
            description='Amplifiers & DACs'
          />
          <CategoryCard SVGIcon={CablesIcon} description='Cables' />
          <CategoryCard SVGIcon={ArrowRightBtn} description='Browse All' />
        </div>
      </section>
    </>
  );
};

export default CategoryListSection;
