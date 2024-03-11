import { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

export const useShoppingCart = () => useContext(ShoppingCartContext);
