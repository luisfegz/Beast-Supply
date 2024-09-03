import React from 'react';

const ProductsGrid = ({ children }) => {
  return (
    <div
      className="
        ml-0
        mr-0
        md:ml-90px
        md:mr-90px
        lg:ml-30px
        lg:mr-30px
      "
    >
      <div
        className="
          lg:grid-cols-4
          md:grid-cols-2
          grid-cols-2
          grid
        "
      >
        {children}
      </div>
    </div>
  );
};

export default ProductsGrid;
