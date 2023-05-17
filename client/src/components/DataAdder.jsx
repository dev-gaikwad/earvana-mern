import axios from 'axios';
import React, { useEffect } from 'react';

const DataAdder = () => {
  const addData = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/product/add-product`,
        {
          name: 'Focal Utopia',
          brand: 'Focal',
          category: 'Headphones',
          in_ear: false,
          wired: true,
          image_url: '/images/products/headphones/wired/focal-utopia.jpg',
          price: 299999,
          discount: true,
          rating: 5.0,
          description:
            'Indulge in the ultimate audio experience with the Focal Utopia wired headphones. These reference-grade headphones offer unrivaled sound quality, precise imaging, and unparalleled comfort, making them a true masterpiece for audiophiles.',
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    addData();
  }, []);
  return <div>DataAdder</div>;
};

export default DataAdder;
