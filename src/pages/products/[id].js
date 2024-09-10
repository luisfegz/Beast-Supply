import styled from 'styled-components';
import Navbar from '../../../components/global/Navbar.js';
import { mongooseConnect } from '../../../lib/mongoose.js';
import { Product } from '../../../models/Product.js';
import DarkBox from '../../../components/global/DarkBox.js';
import ProductImages from '../../../components/global/ProductImages.js';
import CartIcon from "../../../components/icons/CartIcon";
import { useContext } from 'react';
import { CartContext } from '../../../components/global/CartContext.js';

{/* Styled Componets */}
const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const PriceRow = styled.div`
    display: block;
    gap: 20px;
    align-items: center;
`;

export default function ProductPage({product,_id}) {
    const { addProduct } = useContext(CartContext);
    // Formatear el precio
    const formattedPrice = product.price.toLocaleString('es-CO');
    return (
        <>
            <main className="flex bg-[#0a0a0a] flex-col"></main>
                <Navbar/>
                

                {/* Container for Product Details */}
                <section className='font-sans  h-screen bg-[#000000] text-white '>
                    {/* Intencionally empty space */}
                    <div className='h-[20px] bg-[#000000] '/>
                    {/* Container for Col Wrapper */}
                    <div className='mx-6 md:mx-24'>
                        <ColWrapper>
                            <DarkBox>
                                <ProductImages images={product.images} />
                            </DarkBox>
                            <div>
                            {/* Title of the product */}
                            <div className='text-xl font-bold mb-4'>
                                {product.title}
                            </div>
                            <div className='text-md'>   
                                {product.description}
                                <PriceRow>
                                    <div className='h-6'/>
                                    <div className="text-2xl font-semibold text-center mb-3 sm:text-2xl mt-3 text-neutral-200">
                                        {formattedPrice} COP
                                    </div>
                                    {/* Button of add to cart */}
                                    <div>
                                        <button 
                                            onClick={() => addProduct(product._id)}
                                            className="
                                                mt-5 w-full inline-flex lg:h-14 md:h-15 sm:h-14 h-12  text-base md:text-xl animate-shimmer items-center justify-center z-40
                                                rounded-lg border border-[#5d9a8c] bg-[linear-gradient(110deg,#000103,45%,#71a3c1,55%,#000103)] 
                                                bg-[length:200%_100%] px-3.5 font-normal md:font-medium text-slate-100 transition-colors focus:outline-none 
                                                focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
                                            "
                                        >
                                            + Agregar al Carrito<CartIcon className="ml-[5px] h-[16px] md:h-4 lg:h-5" />
                                        </button>  
                                    </div>
                                </PriceRow>
                            </div>
                        </div>
                        </ColWrapper>
                    </div>
                    
                </section>
                
            <main/>
            <div className='h-[1490px] bg-[#000000]'/>
        </>
    )
}

export async function getServerSideProps(context) {
    await mongooseConnect();
    const { id } = context.query;
    const product = await Product.findById(id);
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        }
    }

}