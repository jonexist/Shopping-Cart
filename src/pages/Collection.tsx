import { ProductCollection } from '../components/Collection/ProductCollection';
import Jacket from '../assets/Jacket.jpg';
import Jewelry from '../assets/Jewelry.jpg';
import Tshirt from '../assets/Tshirt.jpg';

export const Collection = () => {
  return (
    <section className='min-h-dvh mt-14'>
      <div className='mx-auto max-w-screen-xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8'>
        <header className='text-center'>
          <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
            Product Collection
          </h2>

          <p className='mx-auto mt-4 max-w-md text-gray-500'>
            Explore our curated collection of products across various categories
            to find the perfect item for your needs.
          </p>
        </header>

        <ul className='mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3'>
          <li>
            <ProductCollection imageUrl={Jacket} title='Women’s Jacket' />
          </li>
          <li>
            <ProductCollection imageUrl={Jewelry} title='Women’s Jewelry' />
          </li>
          <li className='lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1'>
            <ProductCollection imageUrl={Tshirt} title='Women’s T-shirt' />
          </li>
        </ul>
      </div>
    </section>
  );
};
