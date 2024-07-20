import { GetServerSideProps } from "next";
import { Button } from "../../components/ui/button";
import { LampComponent } from "../../components/global/lamp";
import { ContainerScroll } from "../../components/global/container-scroll-animation";
import Navbar from "../../components/global/Navbar";
import Featured from "../../components/global/Featured";
import { mongooseConnect } from "../../lib/mongoose";
import { Product } from "../../models/Product";
import NewProducts from '../../components/global/NewProducts';
import { Vortex } from "../../components/ui/vortex";


interface HomeProps {
  featuredProduct: typeof Product;
  newProducts: typeof Product[];
}


export default function Home({ featuredProduct, newProducts }: HomeProps) {
  return (
    <main className="flex bg-[#000000] items-center justify-center flex-col">
      <Navbar />
      {/* <------------------------------ First Section: Container Scroll --------------------------------> */} 
        <section 
            className="
              !overflow-visible w-full
              relative flex flex-col antialiased 
              inset-0 h-full items-center px-5 py-0 
            "
        >
          <div
            className="
              flex flex-col mt-[50px] md:mt-[-50px]
            "
          >
            <ContainerScroll
              titleComponent={
                <div className="flex items-center flex-col">
                  <Button
                    size={'lg'}
                    className="
                      gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500
                      bg-[#1F1F1F] hover:bg-white transition-all items-center
                      p-8 mb-8 text-2xl w-full sm:w-fit border-t-2 rounded-full 
                      border-[#4D4D4D]  justify-center flex group 
                    "
                  >
                    <span 
                      className="
                        text-transparent bg-gradient-to-r from-neutral-500 
                        to-neutral-600 font-sans group-hover:bg-gradient-to-r 
                        group-hover:from-black goup-hover:to-black bg-clip-text 
                      "
                    >
                      Petcol
                    </span>
                  </Button>
                  <h1 
                    className="
                      from-white to-neutral-600 font-sans font-bold text-6xl 
                      md:text-8xl bg-clip-text text-transparent bg-gradient-to-b 
                    "
                  >
                    Mi corazon esta lleno de huellas
                  </h1>
                </div>
              }
            />
          </div>
        </section>
      {/* <--------------------------------- Third Section: Experimental ---------------------------------> */}
        <section className="w-full mt-0 inset-0">
          <Featured featuredProduct={featuredProduct}/>
        </section>
      {/* <------------------------------- Second Section: Lamp Component (Maybe in this home page it's better hide this ) --------------------------------> */} 
        <section className="w-full mt-0 inset-0">
          <div className=" rounded-md h-[30vh] overflow-hidden">
            <Vortex
              backgroundColor="black"
              rangeY={800}
              particleCount={500}
              baseHue={120}
              className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
            >
              <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                Nuevos Productos
              </h2>
            </Vortex>
          </div>
        </section>
      {/* <--------------------------------- Third Section: Experimental ---------------------------------> */}
        <section className="bg-black">
          <NewProducts newProducts={newProducts} />
        </section>
      {/* <------------------------------- Second Section: Lamp Component (Maybe in this home page it's better hide this ) --------------------------------> */} 
        <section className="w-full mt-0 inset-0 h-screen">
          <LampComponent/>
        </section>
      
    </main>
  );
}


export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const featuredProductId = '6699a9a9cf0844c86a8dfe97';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  {/* Limits of elements of NewProducts section is located here -----------> * */}
  const newProducts = await Product.find({}, null, {sort: {'_id': -1}, limit:10 });
  return {
    props: { 
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts : JSON.parse(JSON.stringify(newProducts)),
    },
  };
};