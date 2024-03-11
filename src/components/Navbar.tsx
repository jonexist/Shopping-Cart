import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/useShoppingCart';
import Logo from '../assets/Logo.svg';
import { ShoppingCart, Menu } from 'react-feather';
// import { routes } from '../router/routes';

const Navbar = () => {
  const { cartItems } = useShoppingCart();
  return (
    <div className='navbar bg-primary flex items-center justify-between fixed top-0 w-full z-50 py-4 shadow-md'>
      <div className='navbar-start w-auto space-x-2'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className=' text-xl lg:hidden'>
            <Menu />
          </div>
          <ul
            tabIndex={0}
            className='menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <NavLink to='/' className='font-medium text-sm uppercase'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='store' className='font-medium text-sm uppercase'>
                Store
              </NavLink>
            </li>
            <li>
              <NavLink to='Features' className='font-medium text-sm uppercase'>
                Features
              </NavLink>
            </li>
            {/* {routes.map(({ id, path, name }) => (
              <li key={id}>
                <NavLink to={path} className='font-medium text-sm uppercase'>
                  <span className='font-medium text-sm uppercase'>{name}</span>
                </NavLink>
              </li>
            ))} */}
          </ul>
        </div>
        <NavLink to='/'>
          <img src={Logo} alt='Shop Logo' className='h-12' />
        </NavLink>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal menu-md text-base space-x-4'>
          <li>
            <NavLink to='/' className='font-medium text-sm uppercase'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='store' className='font-medium text-sm uppercase'>
              Store
            </NavLink>
          </li>
          <li>
            <NavLink to='Features' className='font-medium text-sm uppercase'>
              Features
            </NavLink>
          </li>
          {/* {routes.map(({ id, path, name }) => (
            <li key={id}>
              <NavLink to={path}>
                <span className='font-medium text-sm uppercase'>{name}</span>
              </NavLink>
            </li>
          ))} */}
        </ul>
      </div>
      <div className='flex-none'>
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
            <div className='indicator'>
              <ShoppingCart />
              <span className='badge badge-sm indicator-item'>
                {cartItems.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className='mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow'
          >
            <div className='card-body'>
              <span className='font-bold text-lg'>
                {cartItems.length} Items
              </span>
              <div className='card-actions'>
                <NavLink to='cart' className='btn btn-primary btn-block'>
                  View cart
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
