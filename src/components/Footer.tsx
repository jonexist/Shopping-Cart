import { Facebook, Twitter, Youtube } from 'react-feather';

export const Footer = () => {
  return (
    <footer className='footer footer-center p-10 bg-slate-200 text-base-content rounded'>
      <nav className='grid grid-flow-col gap-4'>
        <a className='link link-hover'>About us</a>
        <a className='link link-hover'>Contact</a>
        <a className='link link-hover'>Partners</a>
        <a className='link link-hover'>Blog</a>
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
