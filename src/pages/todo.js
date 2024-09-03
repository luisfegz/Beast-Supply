import React from 'react'
import Navbar from '../../components/global/Navbar.js'
import { LampComponentTodo } from '../../components/global/LampComponentTodo.tsx'
import { mongooseConnect } from '../../lib/mongoose'
import { Product } from '../../models/Product'
import ProductsGrid from '../../components/global/NewProducts/ProductsGrid'
import Center from '../../components/global/Center.js'
import ProductBox from "../../components/global/NewProducts/ProductBox.js"


export default function ProductsPage({products}) {
  return (
    <>
    <main className="flex bg-[#0a0a0a] items-center justify-center flex-col">
        <Navbar />
        <section className="w-full mt-0 inset-0 justify-center top-0 text-white">
          <LampComponentTodo />
        </section>

        {/* All products section */}
        <section className="mt-[-420px] inset-0 justify-center top-0 text-white">
          <div className="mt-[32px] md:mt-[40px] lg:mt-[110px] mb-[32px] md:mb-[40px] lg:mb-[110px]">
            <ProductsGrid>
              {products?.length > 0 && products.map(products => (
                  <ProductBox {...products}/>
              ))}
            </ProductsGrid>
          </div>
        </section>
      </main>
    </>
  )
}


export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id': -1}});
  return(
    { 
      props: {
        products: JSON.parse(JSON.stringify(products)),
      }
    }
  )
}