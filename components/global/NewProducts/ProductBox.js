import { BackgroundGradient } from "../../ui/background-gradient";
import Center from "../Center";
import CartIcon from "../../icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import Link from "next/link";
import CartShop from "../../icons/CarShop";

export default function ProductBox({_id, title, description, price, images}) {
  // Formatear el precio
  const formattedPrice = price.toLocaleString('es-CO');
  const { addProduct } = useContext(CartContext);
  const url = '/products/'+_id;
  return (
    <Center>
      <>
        <BackgroundGradient
          className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900"
          href={url}
        >
          <img src={images[0]} width={300} height={300} alt=""/>
          <p className="text-base text-center mt-4 sm:text-xl mb-2 text-neutral-200">
            {title}
          </p>
          <p className="text-sm text-center mb-3 sm:text-xl mt-2 text-neutral-200">
            {formattedPrice} COP
          </p>
          <div className="grid grid-cols-2 gap-[8px]">
            <div>
                <Link 
                  href={'/products/'+_id}
                  className="
                    mt-5 w-full inline-flex lg:h-16 md:h-15 sm:h-14 h-12 md:text-xl 
                    shadow-[0_0_0_3px_#000000_inset] px-3 py-2 md:px-6 md:py-4 bg-transparent border
                    border-white text-white  rounded-lg font-normal transform 
                    transition duration-400 hover:-translate-y-1 text-base
                  "
                >
                  Leer+
                </Link>
              </div>
            <div>
              <button 
                onClick={() => addProduct(_id)}
                className="
                    mt-5 w-full inline-flex lg:h-16 md:h-15 sm:h-14 h-12 md:text-xl items-center justify-center z-40
                    font-normal md:font-medium focus:outline-none 
                    shadow-[0_0_0_3px_#000000_inset] px-3.5 py-4 bg-transparent border
                    border-white text-white  rounded-lg transform 
                  transition duration-400 hover:-translate-y-1 text-base
                  "
              >
                  + <CartIcon className="ml-[1.2px] h-[16px] md:h-4 lg:h-5" />
              </button>  
            </div>
            
          </div>
          
          <Link 
            href='/cart' 
            onClick={() => addProduct(_id)}
            className="
                mt-5 w-full inline-flex lg:h-16 md:h-15 sm:h-14 h-12  text-base md:text-xl animate-shimmer items-center justify-center z-40
                px-3.5 font-normal md:font-medium focus:outline-none 
                

                shadow-[0_0_0_3px_#000000_inset] py-4 bg-transparent border
                border-white text-white  rounded-lg transform 
                transition duration-400 hover:-translate-y-1
              "
          >
              Comprar<CartShop className="ml-[6px] h-[20px] md:h-4 lg:h-5" />
          </Link>
          
        </BackgroundGradient>
      </>
    </Center>
  );
};
