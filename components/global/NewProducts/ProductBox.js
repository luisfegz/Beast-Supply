

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
      <div>
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
          <Link 
            href='/cart' 
            onClick={() => addProduct(_id)}
            className="
                mt-5 w-full inline-flex lg:h-16 md:h-15 sm:h-14 h-12  text-base md:text-xl animate-shimmer items-center justify-center z-40
                rounded-lg border border-[#5d9a8c] bg-[linear-gradient(110deg,#000103,45%,#71a3c1,55%,#000103)] 
                bg-[length:200%_100%] px-3.5 font-normal md:font-medium text-slate-100 transition-colors focus:outline-none 
                focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
              "
          >
              Comprar<CartShop className="ml-[6px] h-[20px] md:h-4 lg:h-5" />
          </Link>
          <button 
            onClick={() => addProduct(_id)}
            className="
                mt-5 w-full inline-flex lg:h-16 md:h-15 sm:h-14 h-12  text-base md:text-xl animate-shimmer items-center justify-center z-40
                rounded-lg border border-[#5d9a8c] bg-[linear-gradient(110deg,#000103,45%,#71a3c1,55%,#000103)] 
                bg-[length:200%_100%] px-3.5 font-normal md:font-medium text-slate-100 transition-colors focus:outline-none 
                focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
              "
          >
              Añadir <CartIcon className="ml-2 h-[16px] md:h-4 lg:h-5" />
          </button>
        </BackgroundGradient>
      </div>
    </Center>
  );
};
