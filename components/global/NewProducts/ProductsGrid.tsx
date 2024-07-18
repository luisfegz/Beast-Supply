import React, { ReactNode } from 'react';
import Center from '../Center.js';

interface ProductsGridProps {
  children: ReactNode;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ children }) => {
  return (
    <div className='
            ml-[0px]
            mr-[0ppx]
            md:ml-[90px]
            md:mr-[90px]
            lg:ml-[90px]
            lg:mr-[90px]
        '
    >
        <div 
            className="
                lg:grid-cols-4
                md:grid-cols-3
                grid-cols-2
                grid">
        {children}
        </div>
    </div>
  );
};

export default ProductsGrid;