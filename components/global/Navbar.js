"use client"

import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';
import { buttonVariants } from '../ui/button';
import MaxWidthWrapper from './MaxWidthWrapper';
import CartShop from '../icons/CarShop';
import SearchIcon from '../icons/SearchIcon';
import { CartContext } from './CartContext';


const Navbar = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <nav className='sticky h-[76px] inset-x-0 top-0 z-30 w-full border-b border-zinc-700 bg-black transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-[80px] items-center justify-between '>
          <Link href='/' className='flex items-center z-40 '>
            <Image
                src="/favicon.png"
                alt="Champion Store Logo"
                width={68}
                height={68}
                className="shadow-sm"
            />
            <span className='w-full font-semibold text-black-500'></span>
            
          </Link>
          <div className='hidden items-center space-x-4 sm:flex'>
            <ul
                className='
                    flex
                    md:flex-row
                    items-center
                    gap-4
                    list-none
                '
            >
                <li>
                    <Link
                        href='/proteinas'
                        className={buttonVariants({
                            variant: 'ghost',
                            size: 'sm',
                        })}
                    >
                        Proteínas
                    </Link>
                </li>
                <li>
                    <Link
                        href='/creatinas'
                        className={buttonVariants({
                            variant: 'ghost',
                            size: 'sm',
                        })}
                    >
                        Creatinas
                    </Link>
                </li>
                <li>
                    <Link
                        href='/prentrenos'
                        className={buttonVariants({
                            variant: 'ghost',
                            size: 'sm',
                        })}
                    >
                        Pre entrenos
                    </Link>
                </li>
            </ul>
          </div>
          <aside
              className='
                  flex
                  items-center
                  gap-[8px]
              '
          >
            {/* Offer button (Link) */} 
            <Link 
              href='/search' 
              className="
                inline-flex h-12 text-xl animate-shimmer items-center justify-center z-40
                rounded-md border border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                bg-[length:200%_100%] px-3.5 font-normal md:font-medium text-slate-100 transition-colors focus:outline-none 
                focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
              "
            >
              <SearchIcon />
            </Link>          
            <Link 
              href='/ofertas' 
              className="
                inline-flex h-12 text-base md:text-xl animate-shimmer items-center justify-center z-40
                rounded-md border border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                bg-[length:200%_100%] px-3.5 font-normal md:font-medium text-slate-100 transition-colors focus:outline-none 
                focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
              "
            >
              Ofertas
            </Link>
            <Link 
              href='/cart' 
              className="
                inline-flex h-12 text-xl animate-shimmer items-center justify-center z-40
                rounded-md border border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                bg-[length:200%_100%] px-3.5 font-normal md:font-medium text-slate-100 transition-colors focus:outline-none 
                focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
              "
            >
              <CartShop />({cartProducts.length})
            </Link>
            {/* End Offer button */}
            
          </aside>
          <MobileNav />
        </div>   
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;