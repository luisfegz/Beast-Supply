import { BackgroundGradient } from "../../ui/background-gradient";
import Center from "../Center";

export default function ProductBox({_id, title, description, price, images}) {
  // Formatear el precio
  const formattedPrice = price.toLocaleString('es-CO');

  return (
    <Center>
      <div>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
          <img src={images[0]} width={400} height={400} alt=""/>
          <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
            {title}
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              {formattedPrice}
            </span>
          </button>
        </BackgroundGradient>
      </div>
    </Center>
  );
};
