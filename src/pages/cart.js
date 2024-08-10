import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/global/Navbar'
import WhatsAppIcon from '../../components/icons/WhatsAppIcon'
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from '../../components/utils/cn'
import { CartContext } from '../../components/global/CartContext';

import Table from '../../components/global//Table.js';
import axios from 'axios';


export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);
  
  function formatPrice(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  {/*async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProducts,
    });
    if (response.data.url) {
      window.location.href = response.data.url;
    }
  }

  function getCartText(selectedOption, selectedOption2, selectedOption3) {
    let cartText = products
      .map((product) => {
        const quantity = cartProducts.filter((id) => id === product._id).length;
        return `- ${product.title} (Cantidad: ${quantity}, Precio: ${formatPrice(
          quantity * product.price
        )} COP)`;
      })
      .join("%0a");

    cartText += `%0a%0aTotal: $${formatPrice(total + shippingCost)} COP`;
    cartText += `%0aDomicilio: $${formatPrice(shippingCost)} COP`;
    

    return cartText;
  }

  async function gotowhatsapp() {
    const nameValue = document.getElementById("name").value;
    const cityValue = document.getElementById("city").value;
    const postalCodeValue = document.getElementById("postalCode").value;
    const emailValue = document.getElementById("email").value;
    const streetAddressValue = document.getElementById("streetAddress").value;
    const countryValue = document.getElementById("country").value;

    const cartText = getCartText(selectedOption, selectedOption2, selectedOption3);
    const streetAddressEncoded = encodeURIComponent(streetAddressValue);
    const message = [
      "Hola ¡Champion Store! Estos son mis datos de compra:",
      `Nombre: ${nameValue}`,
      `Ciudad: ${cityValue}`,
      `Código postal: ${postalCodeValue}`,
      `Email: ${emailValue}`,
      `Dirección: ${streetAddressEncoded}`,
      `Departamento: ${countryValue}`,
      "",
      "Productos:",
      "",
      cartText,
    ].join("%0a");

    const url = `https://wa.me/3023639624?text=${message}`;
    window.open(url, "_blank").focus();
  }

  let total = 0;
  products.forEach((product) => {
    const quantity = cartProducts.filter((id) => id === product._id).length;
    total += quantity * product.price;
  });

  if (isSuccess) {
    return (
      <>
      </>
    );
  */}


  return (
    <>
      <main className="flex bg-[#0a0a0a] items-center justify-center flex-col">
        <Navbar />
        <section className="w-full mt-0 inset-0">
          <div className='text-white mb-10 grid grid-rows-2  md:grid-cols-2 mt-4 md:mt-8 gap-4 md:gap-10 mx-2.5 md:mx-6'>
            {/* Box Products */}
            <div className='bg-neutral-900 rounded-[8.6px] p-5'>
            <h2>Cart</h2>
              
            </div>
            
              
            <div className='bg-neutral-900 rounded-[8.6px] p-5'>
              <h2 className="font-bold text-xl text-neutral-200">
                Bienvenido a Beast Supply
              </h2>
              <p className="text-sm max-w-sm mt-2 text-neutral-300">
                Déjenos sus datos de entrega y los datos personales de la persona que recibirá su pedido 
                que recibirá su pedido, a continuación:
              </p>

              <form className="my-8" >
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                  <LabelInputContainer>
                    <Label htmlFor="primerNombre">Primer nombre</Label>
                    <Input id="primerNombre" placeholder="Tyler" type="text" />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="apellido">Apellido</Label>
                    <Input id="apellido" placeholder="Durden" type="text" />
                  </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Dirección Email</Label>
                  <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="direccion">Dirección</Label>
                  <Input id="password" placeholder="Cll 9 # 70-90" type="text" />
                </LabelInputContainer>

                <div className="flex flex-col space-y-4">
                  <button 
                    className="
                      w-full inline-flex lg:h-16 md:h-15 sm:h-14 h-12  text-xs sm:text-sm md:text-xl animate-shimmer items-center justify-center z-40
                      rounded-lg border border-[#5d9a8c] bg-[linear-gradient(110deg,#000103,45%,#75ba75,55%,#000103)] 
                      bg-[length:200%_100%] px-3.5 font-normal md:font-medium text-slate-100 transition-colors focus:outline-none 
                      focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
                    "
                  >
                    Realizar pedido<WhatsAppIcon className="ml-2 h-3.5 sm:h-3.8 md:h-4 lg:h-5" />
                  </button>
                </div>

                <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                
              </form>
              </div>
            </div>
        </section>
        <section className="w-full mt-20 inset-0 h-screen">
          
        </section>
      </main>
    </>
  )
};


const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
