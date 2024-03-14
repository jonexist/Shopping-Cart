import { Facebook, Twitter, Youtube } from 'react-feather';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='footer footer-center p-10 bg-slate-200 text-base-content rounded'>
      <nav className='grid grid-flow-col gap-4'>
        <Link to='/' className='link link-hover'>
          About
        </Link>
        <Link to='/store' className='link link-hover'>
          Store
        </Link>
        <Link to='/collection' className='link link-hover'>
          Collection
        </Link>
      </nav>
      <nav>
        <div className='grid grid-flow-col gap-4'>
          <a>
            <Facebook />
          </a>
          <a>
            <Twitter />
          </a>
          <a>
            <Youtube />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          PANICSHOP
        </p>
      </aside>
    </footer>
  );
};
