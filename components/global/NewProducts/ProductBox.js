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
          <button className="w-full relative inline-flex h-8 sm:h-9 md:h-10 lg:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#be95be_0%,#75ba75_50%,#71a3c1_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white backdrop-blur-3xl">
              Comprar <CartIcon className="ml-2 h-3.5 sm:h-3.9 md:h-4.4 lg:h-5" />
            </span>
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
