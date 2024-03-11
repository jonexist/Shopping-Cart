import { useState, useEffect } from 'react';
import { getProduct } from '../data/getProduct';
import { ProductCard } from '../components/ProductCard';

type Items = {
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

export const Store = () => {
  const [products, setProducts] = useState<Items[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStoreItem = async () => {
      const storage = localStorage.getItem('store products');
      if (storage) {
        setProducts(JSON.parse(storage));
        setLoading(false);
      } else {
        const data = await getProduct();
        localStorage.setItem('store products', JSON.stringify(data));
        setProducts(data);
        setLoading(false);
      }
    };

    fetchStoreItem();
  }, []);

  return (
    <section className='min-h-screen p-7'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20'>
        {loading
          ? [...Array(20)].map((_, index) => (
              <div key={index} className='flex flex-col gap-5'>
                <div className='skeleton h-32 w-full'></div>
                <div className='skeleton h-4 w-28'></div>
                <div className='skeleton h-4 w-full'></div>
                <div className='skeleton h-4 w-full'></div>
              </div>
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </section>
  );
};
