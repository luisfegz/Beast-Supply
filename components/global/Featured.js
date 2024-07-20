import React from 'react';
import Center from './Center';
import Wrapper from './Featured/Wrapper';
import CartIcon from '../icons/CartIcon';
import Link from 'next/link';

function Featured({featuredProduct}) {
  return (
    <div className='bg-zinc-950'>
      <Center>
        <Wrapper>
          <div className='flex items-center'>
            <div>
              <h1 className='font-bold md:font-black mb-2 text-lg md:text-xl lg:text-2xl text-white'>{featuredProduct.title}</h1>
              <p className='text-[.6rem] text-white md:text-[1.1rem] lg:text-[1.3rem]'>{featuredProduct.description}</p>
              {/* <------------------------------------------------------------ Button Read More REMEMBER ---------------------------------------------------------------------------------------------------------------------> */}
              <div className='flex mt-3.5 md:mt-4 lg:mt-5'>
                <div>
                <Link 
                  href={'/products/'+featuredProduct._id}
                  className="
                      inline-flex h-8 md:h-10 lg:h-14 text-sm md:text-lg lg:text-2xl animate-shimmer items-center justify-center z-40
                      rounded-md border border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                      bg-[length:200%_100%] px-1.5 md:px-2 lg:px-3 font-light md:font-normal lg:font-medium text-slate-100 transition-colors focus:outline-none 
                      focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
                    "
                  >
                    Leer+
                  </Link>
                </div>
                {/* <------------------------------------------------------------ Button with functions of add to cart REMEMBER -----------------------------------------------------------------------------------------------> */}
                <div className='ml-2 md:ml-4 lg:ml-6'>
                  <button className="inline-flex h-8 md:h-10 lg:h-14 text-sm md:text-lg lg:text-2xl animate-shimmer items-center justify-center z-40
                      rounded-md border border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                      bg-[length:200%_100%] px-1.5 md:px-2 lg:px-3 font-light md:font-normal lg:font-medium text-slate-100 transition-colors focus:outline-none 
                      focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    Añadir <CartIcon /> 
                  </button>
                </div>
                {/* <-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------> */}
              </div>
            </div>
          </div>
          <div>
            <img className='max-w-[100%]' src="https://luisfelipegaitan-next-ecommerce.s3.amazonaws.com/1721346417623.png" alt="Image" />
          </div>
        </Wrapper>
      </Center>
    </div>
  );
}

export default Featured;
