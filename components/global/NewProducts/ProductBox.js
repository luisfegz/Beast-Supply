import { Link } from "lucide-react";
import CartIcon from "../../icons/CartIcon";
import { BackgroundGradient } from "../../ui/background-gradient";
import Center from "../Center";

export default function ProductBox({_id, title, description, price, images}) {
  // Formatear el precio
  const formattedPrice = price.toLocaleString('es-CO');

  return (
    <Center>
      <div>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
          <img src={images[0]} width={300} height={300} alt=""/>
          <p className="text-base text-center mt-4 sm:text-xl mb-2 text-neutral-200">
            {title}
          </p>
          <p className="text-sm text-center mb-3 sm:text-xl mt-2 text-neutral-200">
            {formattedPrice} COP
          </p>  
          <button className="w-full inline-flex h-12 text-base md:text-xl animate-shimmer items-center justify-center z-40
                rounded-md border border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                bg-[length:200%_100%] px-3.5 font-normal md:font-medium text-slate-100 transition-colors focus:outline-none 
                focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
              Comprar <CartIcon className="ml-2 h-3.5 sm:h-3.9 md:h-4.4 lg:h-5" />
          </button>
          {/* Remeber to add the function add to cart 
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white"> #71a3c1 #75ba75 #be95be
              {formattedPrice}
            </span>
          </button>*/}
        </BackgroundGradient>
      </div>
    </Center>
  );
};
