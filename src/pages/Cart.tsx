import { useState, useEffect } from 'react';
import { CartItem, Product } from '../components/Cart/CartItem';
import { getProduct } from '../data/getProduct';
import { useShoppingCart } from '../context/useShoppingCart';
import { formatCurrency } from '../utilities/formatCurrency';
import { NavLink } from 'react-router-dom';

export const Cart = () => {
  const { cartItems } = useShoppingCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const localStorageData = localStorage.getItem('cart products');
      if (localStorageData) {
        setProducts(JSON.parse(localStorageData));
      } else {
        try {
          const data = await getProduct();
          localStorage.setItem('cart products', JSON.stringify(data));
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products', error);
        }
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className='min-h-dvh mt-20 p-7'>
      <div className='mx-auto container'>
        {cartItems.length === 0 ? (
          <div className='flex flex-col bg-white'>
            <img
              src='https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
              alt=''
              className='h-64 w-full object-cover'
            />

            <div className='flex flex-1 items-center justify-center'>
              <div className='mx-auto max-w-xl px-4 py-8 text-center'>
                <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  You have no cart items
                </h1>

                <p className='mt-4 text-gray-500'>
                  Try adding some items to your cart. You'll find a lot of
                  amazing products on our store.
                </p>
                <NavLink
                  to='/store'
                  className='btn btn-primary rounded-md mt-4'
                >
                  Go to store
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h1 className='text-2xl font-extrabold capitalize mb-5'>
              My Cart Items
            </h1>
            <div className='space-y-5 sm:space-y-5 md:space-y-36 lg:space-y-36'>
              <ul className='space-y-4'>
                {cartItems.map((item: { id: number; quantity: number }) => {
                  const product = products.find(
                    (p: Product) => p.id === item.id
                  );
                  return (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      quantity={item.quantity}
                      product={product}
                    />
                  );
                })}
              </ul>
              <div className='flex justify-end'>
                <div className='w-full max-w-lg space-y-4'>
                  <div className='flex justify-between'>
                    <dt className='uppercase font-extrabold text-xl'>Total</dt>
                    <dd className='uppercase font-extrabold text-xl'>
                      {formatCurrency(
                        cartItems.reduce(
                          (
                            total: number,
                            item: { id: number; quantity: number }
                          ) =>
                            total +
                            item.quantity *
                              (products.find((p: Product) => p.id === item.id)
                                ?.price || 0),
                          0
                        )
                      )}
                    </dd>
                  </div>
                  <span>Total includes tax/VAT. No extra charges.</span>
                  <div className='flex justify-end'>
                    <button className='btn btn-primary rounded-sm w-full text-base uppercase'>
                      Check out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
