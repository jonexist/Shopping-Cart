import { useShoppingCart } from '../context/useShoppingCart';
import { formatCurrency } from '../utilities/formatCurrency';
import { ShoppingCart } from 'react-feather';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  readonly rating: {
    rate: number;
    count: number;
  };
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { increaseItemQuantity } = useShoppingCart();
  const handleAddToCart = () => increaseItemQuantity(product.id);
  return (
    <div key={product.id} className='card card-compact bg-white shadow-xl p-2'>
      <figure className='w-full h-auto md:h-52 lg:h-64 xl:h-72'>
        <img
          src={product.image}
          alt={product.title}
          className='object-contain h-52 w-full'
        />
      </figure>
      <div className='card-body'>
        <h3 className='card-title text-sm sm:text-base md:text-lg line-clamp-1'>
          {product.title}
        </h3>
        <p className='text-sm sm:text-base md:text-md'>
          {formatCurrency(product.price)}
        </p>
        <div className='rating rating-md'>
          {[...Array(5)].map((_, index) => (
            <input
              key={index}
              type='radio'
              name={`rating-${product.id}`}
              className='mask mask-star-2 bg-orange-400'
              checked={index < product.rating.rate}
              disabled
            />
          ))}
        </div>
        <div className='card-actions justify-end'>
          <button onClick={handleAddToCart} className='btn btn-primary'>
            Add to cart <ShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};
