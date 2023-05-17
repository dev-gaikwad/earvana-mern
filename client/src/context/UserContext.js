import { createContext, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/product`
      );
      console.log('All Products -> ', response.data);
      setAllProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <UserContext.Provider value={{ getAllProducts, allProducts }}>
      {children}
    </UserContext.Provider>
  );
};
