import hero from '../../assets/Hero.jpg';
import { NavLink } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section>
      <div
        className='hero min-h-dvh'
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-extrabold text-white'>
              PANIC<span className='text-secondary'>SHOP</span>
            </h1>
            <p className='mb-5 text-slate-50'>
              Experience the future of online shopping with our cutting-edge
              platform powered by the FakeStore API. Browse through a vast
              selection of products across all categories, from fashion and
              electronics to home essentials, all in one convenient location.
            </p>
            <NavLink to='/store' className='btn btn-secondary rounded-md w-44'>
              Shop Now
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
