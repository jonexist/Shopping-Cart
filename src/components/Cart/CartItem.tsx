import { useShoppingCart } from '../../context/useShoppingCart';
import { formatCurrency } from '../../utilities/formatCurrency';
import { Trash } from 'react-feather';

type CartItemProps = {
  id: number;
  quantity: number;
  product: Product | undefined;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  readonly rating: {
    rate: number;
    count: number;
  };
};

export const CartItem = ({ quantity, product }: CartItemProps) => {
  const { removeItem, increaseItemQuantity, decreaseItemQuantity } =
    useShoppingCart();

  if (!product) return null;

  return (
    <li className='flex flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-6 rounded-box border-2 p-5'>
      <img src={product.image} alt={product.title} className='size-36' />
      <div className='text-center sm:text-justify md:text-justify lg:text-justify'>
        <h3 className='text-base font-medium line-clamp-1'>{product.title}</h3>
        <div className='flex flex-col gap-2 items-center sm:items-start md:items-start lg:items-start'>
          <dl>
            <div className='text-sm text-gray-600'>
              <dt className='inline'>Price: </dt>
              <dd className='inline capitalize'>
                {formatCurrency(product.price)}
              </dd>
            </div>
            <div className='text-sm text-gray-600'>
              <dt className='inline'>Total Price: </dt>
              <dd className='inline capitalize'>
                {formatCurrency(product.price * quantity)}
              </dd>
            </div>
          </dl>

          <div className='badge badge-primary capitalize'>
            {product.category}
          </div>
        </div>
      </div>
      <div className='flex flex-1 items-center flex-col sm:flex-row md:flex-row lg:flex-row justify-end gap-5'>
        <div>
          <label htmlFor='Quantity' className='sr-only'>
            {' '}
            Quantity{' '}
          </label>
          <div className='flex items-center rounded border border-gray-200'>
            <button
              type='button'
              className='size-10 leading-10 text-gray-600 transition hover:opacity-75'
              onClick={() => decreaseItemQuantity(product.id)}
            >
              &#8722;
            </button>
            <input
              type='number'
              id='Quantity'
              value={quantity}
              disabled
              className='h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
            />
            <button
              type='button'
              className='size-10 leading-10 text-gray-600 transition hover:opacity-75'
              onClick={() => increaseItemQuantity(product.id)}
            >
              &#43;
            </button>
          </div>
        </div>
        <button onClick={() => removeItem(product.id)} className='text-red-500'>
          <div className='flex gap-1'>
            <span className='sm:block md:hidden lg:hidden text-base'>
              Remove
            </span>
            <Trash className='sm:hidden md:block lg:block' />
          </div>
        </button>
      </div>
    </li>
  );
};
