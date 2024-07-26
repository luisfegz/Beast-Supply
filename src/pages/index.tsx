
import Image from "next/image";
import React from "react";


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
import { MacbookScroll } from '../../components/ui/macbook-scroll';
import Link from "next/link";
import { Badge } from "lucide-react";
import { FlipWords } from "../../components/ui/flip-words";
import { Carousel, Card } from "../../components/ui/apple-cards-carousel";


interface HomeProps {
  featuredProduct: typeof Product;
  newProducts: typeof Product[];
}


export default function Home({ featuredProduct, newProducts }: HomeProps) {
  const words = ["Proteínas", "Creatinas", "Pre-entrenos"];
  const DummyContent = () => {
    return (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  The first rule of Apple club is that you boast about Apple club.
                </span>{" "}
                Keep a journal, quickly jot down a grocery list, and take amazing
                class notes. Want to convert those notes to text? No problem.
                Langotiya jeetu ka mara hua yaar is ready to capture every
                thought.
              </p>
              <Image
                src="https://assets.aceternity.com/macbook.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };
  const data = [
    {
      category: "Artificial Intelligence",
      title: "You can do more with AI.",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Productivity",
      title: "Enhance your productivity.",
      src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Product",
      title: "Launching the new Apple Vision Pro.",
      src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
   
    {
      category: "Product",
      title: "Maps for your iPhone 15 Pro Max.",
      src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "iOS",
      title: "Photography just got better.",
      src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Hiring",
      title: "Hiring for a Staff Software Engineer",
      src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
  ];
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  
  
  return (
    <main className="flex bg-[#000000] items-center justify-center flex-col">
      <Navbar />
      {/* <------------------------------ First Section: Container Scroll --------------------------------> */} 
        {/*<section 
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
       <--------------------------------- Third Section: Experimental ---------------------------------> 
        <section className="w-full mt-0 inset-0">
          <Featured featuredProduct={featuredProduct}/>
        </section>
        
        <------------------------------- Second Section: Lamp Component (Maybe in this home page it's better hide this ) --------------------------------> */} 
        <section className="w-full mt-0 inset-0">
          <div className=" rounded-md h-[30vh] overflow-hidden">
            <Vortex
              backgroundColor="black"
              rangeY={800}
              particleCount={500}
              baseHue={120}
              className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
              <h2 className="text-white text-5xl md:text-6xl font-bold text-center">
                <FlipWords words={words} />
              </h2>
            </Vortex>
          </div>
        </section>
      {/* <--------------------------------- Third Section: Experimental ---------------------------------> */}
        <section className="bg-black">
          <NewProducts newProducts={newProducts} />
        </section>
      {/* <------------------------------- Second Section: Lamp Component (Maybe in this home page it's better hide this ) --------------------------------> 
        <section className="w-full mt-0 inset-0 h-screen">
          <LampComponent/>
        </section>*/} 
      {/* <------------------------------- Second Section: Lamp Component (Maybe in this home page it's better hide this ) -------------------------------->  */}
        <section className="w-full mt-0 inset-0">
          <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-center text-xl md:text-5xl font-bold text-neutral-200 font-sans">
              Get to know your iSad.
            </h2>
            <Carousel items={cards} />
          </div>
        </section>
      
    </main>
  );
}


export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const featuredProductId = '6699a9a9cf0844c86a8dfe97';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  {/* Limits of elements of NewProducts section is located here -----------> * */}
  const newProducts = await Product.find({}, null, {sort: {'_id': -1}, limit:12 });
  return {
    props: { 
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts : JSON.parse(JSON.stringify(newProducts)),
    },
  };
};